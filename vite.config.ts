import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), basicSsl()],
	server: {
		https: true,       // enable HTTPS
		host: 'localhost', // or true if you want LAN access
		port: 5173
	}
});
