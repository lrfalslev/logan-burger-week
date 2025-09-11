<script context="module" lang="ts">
  export type BurgerCardProps = {
    restaurantName: string;
    restaurantLocation: string;
    burgerName: string;
    burgerDescription: string;
    address: string;
    imageUrl: string;
  };
</script>

<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import { CompassIcon } from "@lucide/svelte";

    export let props: BurgerCardProps;

    function openMaps() {
        const encoded = encodeURIComponent(props.address);

        // Detect iOS to prefer Apple Maps, otherwise use Google Maps
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        const url = isIOS
            ? `https://maps.apple.com/?daddr=${encoded}`
            : `https://www.google.com/maps/dir/?api=1&destination=${encoded}`;

        window.open(url, "_blank");
    }
</script>

<Card.Root class="w-full max-w-sm border border-yellow-800">

  <Card.Header class="text-center">

    <Card.Title class="font-extrabold text-3xl tracking-wide text-yellow-500">
        {props.restaurantName} 
        <span class="text-foreground text-sm font-normal tracking-tighter">presents:</span>
        <div class="h-0.5 w-12 bg-yellow-500 rounded-full mx-auto"></div>
    </Card.Title>
    <Card.Title class="font-bold text-xl">{props.burgerName}</Card.Title>
  </Card.Header>

  <Card.Content>
    <img src={props.imageUrl} alt={props.burgerName}/>
    <Card.Description class="pt-2">{props.burgerDescription}</Card.Description>
  </Card.Content>

  <Card.Footer class="flex justify-end">
    <div class="flex items-center gap-2">
        <Card.Description>{props.restaurantLocation}</Card.Description>
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger>
                    <Button class="hover:bg-yellow-500 cursor-pointer" onclick={openMaps}>
                        <CompassIcon color="black" />
                    </Button>
                </Tooltip.Trigger>
                <Tooltip.Content>
                    <p>Take Me To {props.restaurantName}</p>
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    </div>
  </Card.Footer>
</Card.Root>