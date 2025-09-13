<script>
    import HankoAuth from "$lib/components/hanko/HankoAuth.svelte";
    import { logout } from "$lib/components/hanko/HankoLogout.svelte";
    import { Button } from "$lib/components/ui/button";
    
    let { data } = $props();
</script>

<main class="flex flex-1 items-center justify-center overflow-y-auto py-8">
    <div class="w-full max-w-sm px-6">
        <div class="bg-secondary rounded-lg shadow-md p-6 text-center">
            {#if data.user}
                <h2 class="text-lg font-semibold mb-2 text-yellow-500">
                    Welcome Back
                </h2>
                <p class="mb-6">
                    You're logged in as <span class="font-bold tracking-tighter">{data.user.email?.address}</span>
                </p>
                <Button variant="outline" class="w-full justify-center cursor-pointer" onclick={logout}>
                    <span>Logout</span>
                </Button>
            {:else}
                <HankoAuth />
            {/if}
        </div>
    </div>
</main>
