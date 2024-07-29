<script lang="ts">
    import { scroller } from '$lib/scripts/SectionsScroller'
    import CodeBackground from './CodeBackground.svelte'

    export let buttonRole = false
    export let buttonAnimationDelay = 0

    let focused = false;

    const scrollToThis = scroller.createFocusHandler(3)

    const cellFocusHandler = (id: number) => () => {
        scrollToThis();
        focused = true;
    }

    const cellBlurHandler = (id: number) => () => {
        focused = false;
    }
</script>
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="cell"
    role={buttonRole ? 'button' : 'none'}
    tabindex="{buttonRole ? 0 : -1}" 
    on:focus={cellFocusHandler(0)}
    on:blur={cellBlurHandler(0)}
>
    <CodeBackground active={focused} hidden={!buttonRole} animationDelay={buttonAnimationDelay} />
    <slot />
</div>
<style>
    .cell {
        display: grid;
        place-items: center;
        border: 0.5px solid lightgray;
        font-family: 'Fira Sans', sans-serif;
        text-wrap: nowrap;
        overflow: hidden;
        position: relative;
    }
</style>