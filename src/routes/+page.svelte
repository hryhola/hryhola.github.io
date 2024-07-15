<script lang="ts">
    import Main from '$lib/sections/Main.svelte';
    import WhatDoIDo from '$lib/sections/WhatDoIDo.svelte';
    import SkillSet from '$lib/sections/SkillSet.svelte';
    import Experience from '$lib/sections/Experience.svelte';
    import Education from '$lib/sections/Education.svelte';
    import Footer from '$lib/sections/Footer.svelte';
    import { scroller } from '$lib/scripts/SectionsScroller';

    import { onMount } from 'svelte'

    onMount(() => scroller.initialize())
</script>

<div class="sections">
    <Main />
    <WhatDoIDo />
    <SkillSet />
    <Experience />
    <Education />
    <Footer />
</div>
