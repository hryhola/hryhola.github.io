<script lang="ts">
    import { scroller } from '$lib/scripts/SectionsScroller'

    export let hasBlackKey: boolean | undefined = undefined
    export let noteName: string | undefined = undefined
    export let noteColor: string | undefined = undefined
    export let noteBackground: string | undefined = undefined
    export let onHover: Function | undefined = undefined
    export let onBlur: Function | undefined = undefined
    export let disabled: boolean
    export let width: number = 10

    const scrollToThis = scroller.createFocusHandler(2)

    const handleFocus = () => {
        scrollToThis()
        selectNote()
    }

    const handleBlur = () => {
        unselectNote()
    }

    const selectNote = () => {
        if (disabled) return

        calculatedNoteBackground = noteBackground || '';
        calculatedNoteColor = noteColor || '';

        if (onHover) onHover()
    }

    const unselectNote = () => {
        if (disabled) return

        calculatedNoteBackground = ''
        calculatedNoteColor = ''

        if (onBlur) onBlur()
    }

    $: calculatedNoteBackground = ''
    $: calculatedNoteColor = ''
</script>
<div class="key">
    <div class="key-white"></div>
    {#if hasBlackKey}
        <div class="key-black-wrapper">
            <div class="key-black"></div>
        </div>
    {/if}
    {#if noteName}
        <div class="key-note"
            role="listitem"
            style="width: {width}%; background: {calculatedNoteBackground};"
            tabindex="0"
            on:mouseover={selectNote}
            on:mouseout={unselectNote}
            on:focus={handleFocus}
            on:blur={handleBlur}
        >
            <div class="key-note__tail"
                style="color: {calculatedNoteColor}; {calculatedNoteBackground ? `background: linear-gradient(90deg, transparent, ${calculatedNoteBackground});` : ''}"
            >
                {noteName}
            </div>
        </div>
    {/if}
</div>
<style lang="scss">
    @import '../../variables.scss';
 
    .key {
        height: $piano-key-height;
        display: flex;
        flex-flow: row nowrap;
        width: calc(100% + $piano-offset);

        &-white {
            min-width: 150px;
            height: 100%;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
        }

        &-black {
            width: 90px;
            height: 50%;
            position: absolute;
            background: black;
            right: 0;
            transform: translate(0, 150%);


            &-wrapper {
                position: relative;
            }
        }

        &-note {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            align-content: center;
            flex-wrap: nowrap;

            transition: 0.3s;

            &:hover {
                transition: 0s; 
            }

            &__tail {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                align-content: center;
                flex-wrap: nowrap;
        
                transition: background 0.2s, color 1s;
                background: linear-gradient(90deg, transparent, black);
                color: white;

                font-family: Staatliches;
                font-size: calc($piano-key-height / 2);
                padding-right: calc($piano-key-height / 4);

                width: 110px;
                height: 100%;
            }
        }
    }
</style>