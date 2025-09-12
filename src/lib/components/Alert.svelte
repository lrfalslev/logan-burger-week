<script lang="ts">
    import { alert, AlertType, dismissAlert } from '$lib/stores/alert';
    import * as Alert from "$lib/components/ui/alert/index.js";
    import { CheckCircle2Icon, AlertCircleIcon, InfoIcon } from "@lucide/svelte";
</script>

{#if $alert}
    <Alert.Root variant={$alert.type.toString()} class="fixed top-4 left-1/2 translate-x-[-50%] w-[95%] md:left-auto md:right-4 md:translate-x-0 md:w-90 z-[99]">
        {#if $alert.type == AlertType.Success}
            <CheckCircle2Icon />
        {:else if $alert.type == AlertType.Failure}
            <AlertCircleIcon />
        {:else}
            <InfoIcon />
        {/if}
        <Alert.Title class="font-bold">{$alert.title}</Alert.Title>
        {#if $alert.description}
            <Alert.Description>{$alert.description}</Alert.Description>
        {/if}
    </Alert.Root>
{/if}
