<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/hamburger.svg';
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
    <main class="flex flex-1 md:items-center justify-center overflow-y-auto mb-15 md:mb-0">
        {@render children()}
    </main>
</div>