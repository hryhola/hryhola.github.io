<script  lang="ts">
    import { scroller } from "$lib/scripts/SectionsScroller";
    import type { MouseEventHandler } from "svelte/elements";

    let isContactsOpen = false

    const handleContactsExpand: MouseEventHandler<HTMLAnchorElement> = (event) => {
        isContactsOpen = !isContactsOpen
    }

    const handleScroll: MouseEventHandler<HTMLAnchorElement> = (event) => {
        console.log('here')

        const target = event.target as HTMLAnchorElement

        if (!target.dataset.scrollIndex) {
            console.error('Invalid data-scroll-index')

            return
        }

        scroller.scrollToSection(+target.dataset.scrollIndex)
    }
</script>
<style>
    #contacts {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.2s ease-out;
    }

    #contacts dl {
        overflow: hidden;
    }

    #contacts[data-is-open="true"] {
        grid-template-rows: 1fr;
    }
</style>
<section itemscope itemtype="http://schema.org/Person">
    <blockquote cite="https://de.wikisource.org/wiki/Seite:Allgemeine_Naturgeschichte_und_Theorie_des_Himmels.djvu/33">Gebet mir Materie, ich will eine Welt daraus bauen!</blockquote>

    <h1>
        <span itemprop="name">
            <span itemprop="givenName">Vladyslav</span>
            <span itemprop="familyName">Hryhola</span>
        </span>.
        <span itemprop="jobTitle">Software Engineer</span>.
        <span itemprop="hasOccupation">Private entrepreneur</span>.
    </h1>

    <nav>
        <ul>
            <li>&gt; <a on:click|preventDefault={handleScroll} data-scroll-index="1" href="#what-do-I-do">what do I do</a></li>
            <li>&gt; <a on:click|preventDefault={handleScroll} data-scroll-index="2" href="#skill-set">skill set</a></li>
            <li>&gt; <a on:click|preventDefault={handleScroll} data-scroll-index="3" href="#experience">experience</a></li>  
            <li>&gt; <a on:click|preventDefault={handleScroll} data-scroll-index="4" href="#education">education</a></li>
            <li>&gt; <a on:click|preventDefault={handleContactsExpand} href="#contacts">contacts</a></li>
        </ul>
    </nav>

    <div id="contacts" data-is-open={isContactsOpen}>
        <dl>
            <dt><img width="20" src="logos/telegram.svg" alt="Telegram"></dt>
            <dd><a href="https://t.me/VladHryhola" itemprop="sameAs">@VladHryhola</a></dd>

            <dt><img width="20" src="logos/email.svg" alt="Email"></dt>
            <dd><a href="mailto:vladyslav.hryhola@gmail.com" itemprop="email">vladyslav.hryhola@gmail.com</a></dd>

            <dt><img width="20" src="logos/phone.svg" alt="Phone Number"></dt>
            <dd><a href="tel:+380669726801" itemprop="telephone">+38 066 972 6801</a></dd>

            <dt><img width="20" src="logos/linkedin.svg" alt="Linked In"></dt>
            <dd><a href="https://linkedin.com/in/vlad-hryhola" itemprop="url" rel="me">linkedin.com/in/vlad-hryhola</a></dd>
        </dl>
    </div>
</section>
