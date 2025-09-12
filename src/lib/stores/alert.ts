import { writable, type Readable } from 'svelte/store';

enum AlertType {
    Info = 'info',
    Success = 'success',
    Failure = 'failure'
}

type Alert = {
    title: string;
    description?: string;
    type: AlertType;
}

let timeout: ReturnType<typeof setTimeout> | null = null;
const _alert = writable<Alert | null>();
const alert: Readable<Alert | null> = {
  subscribe: _alert.subscribe
};

function showAlert(
    title: string, 
    description = '', 
    type: AlertType = AlertType.Info,
    duration = 3000
): void {
    if (timeout) 
        clearTimeout(timeout);

    _alert.set({title, description, type});

    timeout = setTimeout(() => {
        _alert.set(null);
    }, duration);
}

function dismissAlert(): void {
  if (timeout) 
    clearTimeout(timeout);
 
  _alert.set(null);
}

export { alert, AlertType, showAlert, dismissAlert };