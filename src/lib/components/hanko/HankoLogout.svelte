<script context="module" lang="ts">
    import { goto, invalidateAll } from "$app/navigation";
    import { env } from "$env/dynamic/public";

    const hankoApi = env.PUBLIC_HANKO_API_URL;
    let hanko: any;

    export async function logout() {
        if (!hanko) {
            const { Hanko } = await import("@teamhanko/hanko-elements");
            hanko = new Hanko(hankoApi);
        }
        await hanko.logout().catch(console.error);
        await invalidateAll();
        goto("/");
    }
</script>