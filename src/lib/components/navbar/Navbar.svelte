<script lang="ts">
    import MobileNav from "./MobileNav.svelte";
    import DesktopNav from "./DesktopNav.svelte";
      
    const navLinks: { title: string; href: string; }[] = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "What's Burger Week",
            href: "/about"
        },
        {
            title: "Burger Lineup",
            href: "/burgers"
        },
        {
            title: "F.A.Q.",
            href: "/faq"
        },
        {
            title: "Contact",
            href: "/contact"
        }
    ];
</script>

<nav class="flex items-center justify-between p-4 border-b border-yellow-800">
    <a href="/" class="text-xl font-bold">Logan Burger Week</a>

    <div class="hidden md:block">
        <DesktopNav {navLinks} />
    </div>

    <div class="md:hidden">
        <MobileNav {navLinks} />
    </div>
</nav>