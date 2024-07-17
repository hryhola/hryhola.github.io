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
        <li><span class="marker">&gt;</span><a on:click|preventDefault={handleScroll} data-scroll-index="1" href="#what-do-I-do">what do I do</a></li>
        <li><span class="marker">&gt;</span><a on:click|preventDefault={handleScroll} data-scroll-index="2" href="#skill-set">skill set</a></li>
        <li><span class="marker">&gt;</span><a on:click|preventDefault={handleScroll} data-scroll-index="3" href="#experience">experience</a></li>  
        <li><span class="marker">&gt;</span><a on:click|preventDefault={handleScroll} data-scroll-index="4" href="#education">education</a></li>
        <li>
            <span class="marker">
                <span id="contacts-marker" data-active={$isContactsExpanded}>
                    &gt;
                </span>
            </span><a on:click|preventDefault={handleContactsExpand} href="#contacts">contacts</a>
        </li>
    </ul>
</nav>

<style>
    nav {
        font-family: "Fira Code", monospace;
        font-size: 18px;
    }

    nav .marker {
        display: inline-block;
        width: var(--marker-width);
    }

    nav ul li a {
        text-decoration: none;
        color: black;
    }
    
    #contacts-marker {
        display: inline-block;

        transition: 0.5s;
    }

    #contacts-marker[data-active="true"] {
        transform: rotate(90deg);
    }
</style>
