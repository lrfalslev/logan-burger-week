<script lang="ts">
    import { EVENT_RANGE_STRING } from '$lib/constants';
</script>

<section class="flex h-full w-full md:w-2/3 lg:px-20">

    <div class="w-1/3 h-full overflow-y-hidden">
        <img
            src="/exploded-burger.webp"
            alt="Delicious burger"
            class="h-full object-cover object-right"
        />
    </div>

    <div class="w-2/3 h-full flex items-center justify-center pr-2 text-center">
        <div>
            <h1 class="text-3xl md:text-6xl font-extrabold tracking-tight">
                Logan Burger Week
            </h1>
            <p class="inline-block text-xl md:text-4xl font-semibold text-yellow-500 mb-8 bg-accent px-8 border border-yellow-500 border-2" style="transform: rotate(-3deg)">
                {EVENT_RANGE_STRING}
            </p>
            <h1 class="text-xl md:text-4xl mb-4 tracking-tighter font-semibold">
                One Week. Endless Burgers.
            </h1>
            <p class="md:text-xl max-w-xl mx-auto">
                10 restaurants.<br> 
                10 exclusive creations.<br>
                7 days of flavor in Cache Valley.
            </p>
            
                <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <a
                        href="/burgers"
                        class="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition"
                    >
                        Explore The Burgers
                    </a>
                    <a
                        href=""
                        class="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
                    >
                        Login
                    </a>
                </div>
        </div>
    </div>
</section>
