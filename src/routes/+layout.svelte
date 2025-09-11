<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from "mode-watcher";
    import Navbar from '$lib/components/navbar/Navbar.svelte';
	
    const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<div class="flex flex-col h-screen">
    <Navbar />
    <main class="flex flex-1 items-center justify-center overflow-y-auto">
        {@render children()}
    </main>
</div>