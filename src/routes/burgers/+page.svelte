
<script lang="ts">
    import Card, { type BurgerCardProps } from "./components/Card.svelte";

    const burgerProps: BurgerCardProps[] = [
        {
            restaurantName: "Zim's Cafe",
            restaurantLocation: "215 West Main St",
            burgerName: "Zimento Cheeseburger",
            burgerDescription: "A ¼-lb. pound patty topped with pimento cheese, pickled jalapeno, and fried onion straws.",
            address: "215 West Main St, Logan, UT",
            imageUrl: "https://placehold.co/400"
        },
        {
            restaurantName: "Wild Eggs",
            restaurantLocation: "1925 Justice Dr.",
            burgerName: "Morning Moo",
            burgerDescription: "2 smash burgers and American cheese paired with a fried hash brown casserole, candied bacon, egg your way, and maple aioli.",
            address: "1925 Justice Dr., Logan, UT",
            imageUrl: "https://placehold.co/400"
        },
        {
            restaurantName: "Tolly Ho",
            restaurantLocation: "350 Foreman Ave.",
            burgerName: "The Big Easy Ho",
            burgerDescription: "Our signature ¼-lb. Ho burger gets the full New Orleans treatment! Thin-sliced grilled prosciutto and mortadella, melty provolone and fontina, topped with a bold olive tapenade.",
            address: "350 Foreman Ave., Logan, UT",
            imageUrl: "https://placehold.co/400"
        },
        {
            restaurantName: "Stella's Deli",
            restaurantLocation: "1143 Jefferson St.",
            burgerName: "The Veggie Hot Brown Burger",
            burgerDescription: "The vegetarian version of the Hot Brown Burger features a house made lentil patty with grilled tomatoes, grilled veggies, and white cheddar Mornay sauce.",
            address: "1143 Jefferson St., Logan, UT",
            imageUrl: "https://placehold.co/400"
        }
    ];
</script>

<div class="h-full overflow-y-auto p-3 md:pb-8">
    <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-yellow-500 tracking-tight">
            Meet the Burgers
        </h1>
        <div class="h-1 w-24 bg-yellow-500 mx-auto rounded-full"></div>
        <p class="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Each restaurant is serving up something bold, juicy, and unforgettable.  
            Explore the lineup and plan your week.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {#each burgerProps as burgerProp}
            <Card props={burgerProp}/>
        {/each}
    </div>
</div>