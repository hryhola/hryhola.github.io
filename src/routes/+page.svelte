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
    import { isContactsExpanded } from '$lib/scripts/helpers/context'
    import { setVhVariable } from '$lib/scripts/helpers/style'
    import { debounce } from '$lib/scripts/helpers/function'

    onMount(async () => {
        await tick()

        setVhVariable()

        $isContactsExpanded = window.screen.width > 420

        scroller.initialize()
        scroller.scrollToHash()
    
        window.addEventListener('popstate', () => scroller.scrollToHash(true))
        window.addEventListener('resize', debounce(setVhVariable))
        window.addEventListener('orientationchange', setVhVariable)

        import('swiped-events');
    })
</script>
<svelte:head>
    <title>Vladyslav Hryhola – Software Engineer & Private Entrepreneur</title>
    <link rel="canonical" href="https://hryhola.github.io/" />
    <meta name="description" content="Who am I? A software engineer and developer. Discover my expertise in web development, data analytics, design and beyond. Interested in collaborating? Find my contact information below." />
    <meta name="keywords" content="engineer,developer,programmer,frontender,backender,lntu" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Vladyslav Hryhola – Software Engineer & Private Entrepreneur" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Experienced Software Engineer with a passion for web development. Proficient in JavaScript, React, and other technologies. Check out my portfolio and let's collaborate!" />
    <meta property="og:image" content="https://hryhola.github.io/pictures/vladyslav_hryhola_profile.jpg" />
    <meta property="og:url" content="https://hryhola.github.io/" />
    <meta property="og:site_name" content="Vladyslav Hryhola" />
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@VladHryhola">
    <meta name="twitter:title" content="Vladyslav Hryhola - Software Engineer & Private Entrepreneur">
    <meta name="twitter:description" content="Experienced Software Engineer seeking new challenges. Proficient in JavaScript, React, and Node.js. Let's build something great together!">
    <meta name="twitter:image" content="https://hryhola.github.io/pictures/vladyslav_hryhola_profile.jpg">
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
