<script lang="ts">
    import { onMount } from "svelte";
    import { goto, invalidateAll } from "$app/navigation";
    import { register } from "@teamhanko/hanko-elements";
    import { env } from "$env/dynamic/public";
    import { browser } from "$app/environment";

    const hankoApi = env.PUBLIC_HANKO_API_URL;

    const redirectAfterLogin = async () => {
        await invalidateAll();
        goto("/passport");
    };

    onMount(async () => {
        register(hankoApi).catch(console.error);
    });
</script>

{#if browser}
    <hanko-auth
        api={hankoApi} 
        on:onSessionCreated={redirectAfterLogin} 
    ></hanko-auth>
{/if}