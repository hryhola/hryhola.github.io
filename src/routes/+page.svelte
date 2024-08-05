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
<SectionsPointer />
<div class="sections" itemscope itemtype="http://schema.org/Person">
    <Main />
    <WhatDoIDo />
    <SkillSet />
    <Experience />
    <Education />
    <Footer />
</div>
