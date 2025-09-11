<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import SettingsIcon from "@lucide/svelte/icons/settings";
  import UserIcon from "@lucide/svelte/icons/user-round";
  import SunIcon from "@lucide/svelte/icons/sun";
  import MoonIcon from "@lucide/svelte/icons/moon";
  import { page } from '$app/state';
  import { toggleMode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";

  let { navLinks }: { navLinks: { title: string; href: string }[] } = $props();
</script>

<NavigationMenu.Root viewport={false}>
  <NavigationMenu.List>
    {#each navLinks as { title, href }}
      <NavigationMenu.Item>
          <NavigationMenu.Link {href} data-active={page.url.pathname === href}>
              {title}
          </NavigationMenu.Link>
      </NavigationMenu.Item>
    {/each}

    <NavigationMenu.Item>
      <Popover.Root>
          <Popover.Trigger>
              <Button variant="ghost" aria-label="Settings">
                  <SettingsIcon />
              </Button>
          </Popover.Trigger>

          <Popover.Content align="end" class="w-56 p-2 flex flex-col gap-2">
              <Button variant="outline" class="w-full justify-center">
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
          </Popover.Content>
      </Popover.Root>
  </NavigationMenu.Item>

  </NavigationMenu.List>
</NavigationMenu.Root>