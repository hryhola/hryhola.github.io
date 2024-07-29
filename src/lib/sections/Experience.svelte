<script lang="ts">
    import CodeBackground from "$lib/components/experience/CodeBackground.svelte"
    import { scroller } from '$lib/scripts/SectionsScroller'

    let stage: 'preview' | 'chronology' = 'preview'
    let activeCode = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false
    }

    const scrollToThis = scroller.createFocusHandler(3)

    const cellFocusHandler = (id: number) => () => {
        scrollToThis();
        activeCode = { ...activeCode, [id]: true }
    }

    const cellBlurHandler = (id: number) => () => {
        activeCode = { ...activeCode, [id]: false }
    }

    $: isPreview = stage === 'preview';
    $: isChronology = stage !== 'preview';
    $: clickableCellProps = isChronology
        ? { tabindex: -1, role: 'none' }
        : { tabindex: 0, role: 'button' }
</script>
<section id="experience">
    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(0)} on:blur={cellBlurHandler(0)}><CodeBackground active={activeCode[0]} hidden={isChronology} animationDelay={0} /></div>
    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(1)} on:blur={cellBlurHandler(1)}><CodeBackground active={activeCode[1]} hidden={isChronology} animationDelay={2} /></div>
    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(2)} on:blur={cellBlurHandler(2)}><CodeBackground active={activeCode[2]} hidden={isChronology} animationDelay={4} /></div>

    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(3)} on:blur={cellBlurHandler(3)}><CodeBackground active={activeCode[3]} hidden={isChronology} animationDelay={6} /></div>
    <div class="cell slogan-beginning">I’ve coded things...</div>
    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(4)} on:blur={cellBlurHandler(4)}><CodeBackground active={activeCode[4]} hidden={isChronology} animationDelay={8} /></div>

    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(5)} on:blur={cellBlurHandler(5)}><CodeBackground active={activeCode[5]} hidden={isChronology} animationDelay={10} /></div>
    <img class="cell " src="pictures/Blade_Runner.gif" alt="Roy Batty from Blade Runner (1982)" />
    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(6)} on:blur={cellBlurHandler(6)}><CodeBackground active={activeCode[6]} hidden={isChronology} animationDelay={12} /></div>

    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(7)} on:blur={cellBlurHandler(7)}><CodeBackground active={activeCode[7]} hidden={isChronology} animationDelay={14} /></div>
    <div class="cell slogan-end">you people wouldn't even believe</div>
    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(8)} on:blur={cellBlurHandler(8)}><CodeBackground active={activeCode[8]} hidden={isChronology} animationDelay={16} /></div>

    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(9)} on:blur={cellBlurHandler(9)}><CodeBackground active={activeCode[9]} hidden={isChronology} animationDelay={18} /></div>
    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(10)} on:blur={cellBlurHandler(10)}><CodeBackground active={activeCode[10]} hidden={isChronology} animationDelay={20} /></div>
    <div class="cell" {...clickableCellProps} on:focus={cellFocusHandler(11)} on:blur={cellBlurHandler(11)}><CodeBackground active={activeCode[11]} hidden={isChronology} animationDelay={22} /></div>
</section>
<style lang="scss">
    #experience {
        display: grid;
        
        grid-template-columns: 1fr min-content 1fr;
        grid-template-rows:
            2fr
            1fr
            min-content
            1fr
            2fr;
    }

    .cell {
        display: grid;
        place-items: center;
        border: 0.5px solid lightgray;
        font-family: 'Fira Sans', sans-serif;
        text-wrap: nowrap;
        overflow: hidden;
        position: relative;
    }

    .slogan {
        &-beginning {
            font-size: 58px;
            font-weight: 600;
        }

        &-end {
            font-size: 21px;
            font-weight: 200;
            letter-spacing: 0.25em;
        }
    }
</style>
