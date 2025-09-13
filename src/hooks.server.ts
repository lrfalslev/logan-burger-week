import type { Handle } from "@sveltejs/kit";
import { PUBLIC_HANKO_API_URL } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
    
    const hankoSession = event.cookies.get("hanko");

    if (hankoSession) {
        try {
            const res = await fetch(`${PUBLIC_HANKO_API_URL}/sessions/validate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ session_token: hankoSession })
            });

            if (res.ok) {
                const data = await res.json();
                if (data.is_valid) {
                    event.locals.user = data.claims;
                } else {
                    event.locals.user = null;
                }
            }
        } catch (err) {
            console.error("Hanko session validation failed", err);
            event.locals.user = null;
        }
    } else {
        event.locals.user = null;
    }

    return resolve(event);
};
