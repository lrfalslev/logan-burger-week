<script lang="ts">
    import * as Sheet from "$lib/components/ui/sheet";
    import { Button } from "$lib/components/ui/button";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import { MoonIcon, SunIcon, UserIcon, HamburgerIcon } from "@lucide/svelte";
    import { toggleMode } from "mode-watcher";

    let { navLinks }: { navLinks: { title: string; href: string; description?: string }[] } = $props();
</script>

<Sheet.Root>
  <Sheet.Trigger class={buttonVariants({ variant: "outline" })}>
    <HamburgerIcon />
  </Sheet.Trigger>
  <Sheet.Content side="right">

    <nav class="flex flex-col gap-2 p-2 pt-12">
        {#each navLinks as { title, href }}
            <a {href} class={buttonVariants({ variant: "outline" })}>{title}</a>
        {/each}
    </nav>

    <Sheet.Footer>
        <Button variant="outline">
            <UserIcon />
            <span class="ml-2">Login</span>
        </Button>
        <Button onclick={toggleMode} variant="outline" class="w-full justify-center">
            <span class="flex">
                <SunIcon class="dark:scale-0" />
                <MoonIcon class="absolute scale-0 dark:scale-100" />
            </span>
            <span class="ml-2">Toggle Dark Mode</span>
        </Button>
    </Sheet.Footer>
    
  </Sheet.Content>
</Sheet.Root>
