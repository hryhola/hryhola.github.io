<script lang="ts">
    import Main from '$lib/sections/Main.svelte';
    import WhatDoIDo from '$lib/sections/WhatDoIDo.svelte';
    import SkillSet from '$lib/sections/SkillSet.svelte';
    import Experience from '$lib/sections/Experience.svelte';
    import Education from '$lib/sections/Education.svelte';
    import Footer from '$lib/sections/Footer.svelte';
    import SectionsPointer from '$lib/components/SectionsPointer.svelte';
    import { scroller } from '$lib/scripts/SectionsScroller';
    import { onMount, tick } from 'svelte'
    import { setVhVariable } from '$lib/scripts/helpers/style'
    import { debounce } from '$lib/scripts/helpers/function'

    onMount(async () => {
        await tick()

        setVhVariable()

        scroller.initialize()
        scroller.scrollToHash()

        document.documentElement.dataset.norefreshOnScroll = 'true';
    
        window.addEventListener('popstate', () => scroller.scrollToHash(true))
        window.addEventListener('resize', debounce(setVhVariable))
        window.addEventListener('orientationchange', setVhVariable)

        import('swiped-events');
    })
</script>
<svelte:head>
    <title>Vladyslav Hryhola – Software Engineer & Problem Solver</title>
    <link rel="canonical" href="https://hryhola.github.io/" />
    <meta name="description" content="I'm a software engineer and developer with skills in web development, data analytics, and design. Want to collaborate? Find my contact info below." />
    <meta name="keywords" content="engineer,developer,programmer,frontender,backender,lntu" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Vladyslav Hryhola – Software Engineer & Problem Solver" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="I'm a software engineer and developer with skills in web development, data analytics, and design. Want to collaborate? Find my contact info below." />
    <meta property="og:image" content="https://hryhola.github.io/pictures/Vladyslav_Hryhola_OG.jpg" />
    <meta property="og:url" content="https://hryhola.github.io/" />
    <meta property="og:site_name" content="Vladyslav Hryhola" />
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@VladHryhola">
    <meta name="twitter:title" content="Vladyslav Hryhola - Software Engineer & Problem Solver">
    <meta name="twitter:description" content="I'm a software engineer and developer with skills in web development, data analytics, and design. Want to collaborate? Find my contact info below.">
    <meta name="twitter:image" content="https://hryhola.github.io/pictures/Vladyslav_Hryhola_OG.jpg">
</svelte:head>
<SectionsPointer />
<div class="sections" itemscope itemtype="http://schema.org/Person">
    <Main />
    <WhatDoIDo />
    <SkillSet />
    <Experience />
    <Education />
    <Footer />
</div>
