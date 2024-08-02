<script lang="ts">
    import Main from '$lib/sections/Main.svelte';
    import WhatDoIDo from '$lib/sections/WhatDoIDo.svelte';
    import SkillSet from '$lib/sections/SkillSet.svelte';
    import Experience from '$lib/sections/Experience.svelte';
    import Education from '$lib/sections/Education.svelte';
    import Footer from '$lib/sections/Footer.svelte';
    import { scroller } from '$lib/scripts/SectionsScroller';
    import { onMount, tick } from 'svelte'
    import { isContactsExpanded } from '$lib/scripts/helpers/context'

    onMount(async () => {
        await tick();
        
        $isContactsExpanded = window.screen.width > 420;

        scroller.initialize()
        scroller.scrollToHash()
        window.addEventListener('popstate', () => scroller.scrollToHash(true))

        import('swiped-events');
    })
</script>

<div class="sections" itemscope itemtype="http://schema.org/Person">
    <Main />
    <WhatDoIDo />
    <SkillSet />
    <Experience />
    <Education />
    <Footer />
</div>
