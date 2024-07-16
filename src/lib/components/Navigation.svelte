<script  lang="ts">
    import { scroller } from "$lib/scripts/SectionsScroller";
    import { isContactsExpanded } from '$lib/scripts/context'
    import type { MouseEventHandler } from "svelte/elements";

    const handleContactsExpand: MouseEventHandler<HTMLAnchorElement> = () => {
        isContactsExpanded.set(!$isContactsExpanded)
    }

    const handleScroll: MouseEventHandler<HTMLAnchorElement> = (event) => {
        const target = event.target as HTMLAnchorElement

        if (!target.dataset.scrollIndex) {
            console.error('Invalid data-scroll-index')

            return
        }

        scroller.scrollToSection(+target.dataset.scrollIndex)
    }
</script>

<nav>
    <ul>
        <li>&gt; <a on:click|preventDefault={handleScroll} data-scroll-index="1" href="#what-do-I-do">what do I do</a></li>
        <li>&gt; <a on:click|preventDefault={handleScroll} data-scroll-index="2" href="#skill-set">skill set</a></li>
        <li>&gt; <a on:click|preventDefault={handleScroll} data-scroll-index="3" href="#experience">experience</a></li>  
        <li>&gt; <a on:click|preventDefault={handleScroll} data-scroll-index="4" href="#education">education</a></li>
        <li>&gt; <a on:click|preventDefault={handleContactsExpand} href="#contacts">contacts</a></li>
    </ul>
</nav>
