<script lang="ts">
    import { scroller } from '$lib/scripts/SectionsScroller'
    import CodeBackground from './CodeBackground.svelte'

    export let buttonRole = false
    export let buttonAnimationDelay = 0
    export let onClick: () => void = () => {}
    export let justifyContent: 'end' | 'start' | undefined = undefined

    let focused = false;

    const scrollToThis = scroller.createFocusHandler(3)

    const focusHandler = () => {
        scrollToThis();
        focused = true;
    }

    const blurHandler = () => {
        focused = false;
    }

    $: styles = justifyContent ? `justify-content: ${justifyContent}` : '';
</script>
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="cell"
    role={buttonRole ? 'button' : 'none'}
    tabindex="{buttonRole ? 0 : -1}"
    style={styles}
    on:focus={focusHandler}
    on:blur={blurHandler}
    on:click={onClick}
>
    <CodeBackground active={focused} hidden={!buttonRole} animationDelay={buttonAnimationDelay} />
    <slot />
</div>
<style lang="scss">
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
