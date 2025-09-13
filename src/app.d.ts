// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
        interface Locals {
            user?: {
                subject: string; // Hanko user ID
                email?: {
                    address: string;
                    is_verified: boolean;
                };
                // Add any other claims you expect from Hanko here
                [key: string]: unknown;
            } | null;
        }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
