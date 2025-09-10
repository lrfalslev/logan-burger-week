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
<div class="min-h-screen">
    <Navbar />
    <main class="p-4">
        {@render children()}
    </main>
</div>
