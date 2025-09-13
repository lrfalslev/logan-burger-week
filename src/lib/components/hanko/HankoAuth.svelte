<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { register } from "@teamhanko/hanko-elements";
    import { env } from "$env/dynamic/public";
    import { browser } from "$app/environment";

    const hankoApi = env.PUBLIC_HANKO_API_URL;

    const redirectAfterLogin = () => {
        //Successfully logged in
        goto("/dashboard");
    };

    onMount(async () => {
        register(hankoApi).catch((error) => {
        // handle error
        });
    });
</script>

{#if browser}
  <hanko-auth api={hankoApi} on:onSessionCreated={redirectAfterLogin}></hanko-auth>
{/if}