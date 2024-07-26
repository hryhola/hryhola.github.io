<script lang="ts">
    import { scroller } from '$lib/scripts/SectionsScroller'

    export let hasBlackKey: boolean | undefined = undefined
    export let noteName: string | undefined = undefined
    export let shortNoteName: string | undefined = undefined
    export let noteColor: string | undefined = undefined
    export let noteBackground: string | undefined = undefined
    export let onHover: Function | undefined = undefined
    export let onBlur: Function | undefined = undefined
    export let disabled: boolean
    export let distance: number = 10

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
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div class="key-note"
            role="listitem"
            style="width: {distance}%; height: calc({distance}% / 7 + 140px); background: {calculatedNoteBackground};"
            tabindex="{disabled ? -1 : 0}"
            on:mouseover={selectNote}
            on:mouseout={unselectNote}
            on:focus={handleFocus}
            on:blur={handleBlur}
        >
            <div class="key-note__tail"
                style="color: {calculatedNoteColor}; {calculatedNoteBackground ? `background: linear-gradient(90deg, transparent, ${calculatedNoteBackground});` : ''}"
            >
                <span class="key-note__tail_text">{noteName}</span>
                <span class="key-note__tail_short_text">{shortNoteName}</span>
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

        @media screen and (max-width: $width-tablet-small) {
            flex-flow: column nowrap;
            height: calc(100% + $piano-offset);
            width: $piano-key-width;
        }

        &-white {
            min-width: 150px;
            height: 100%;
            border-right: 1px solid black;
            border-bottom: 1px solid black;

            @media screen and (max-width: $width-tablet-small) {
                min-height: 140px;
                height: 140px;
                width: 100%;
                min-width: auto;
            }
        }

        &-black {
            width: 90px;
            height: 50%;
            position: absolute;
            background: black;
            right: 0;
            transform: translate(0, 150%);

            @media screen and (max-width: $width-tablet-small) {
                height: 70px;
                width: 50%;
                transform: translate(50%, -100%);
            }

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

            @media screen and (min-width: $width-tablet-small) {
                height: auto!important;
            }
        
            @media screen and (max-width: $width-tablet-small) {
                width: $piano-key-width!important;
                flex-direction: column;
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

                &_short_text {
                    display: none;
                }

                &_short_text, &_text {
                    text-wrap: nowrap;
                }
                
                @media screen and (max-width: $width-tablet-big) {
                    &_text {
                        display: none;
                    }

                    &_short_text {
                        display: inline;
                    }
                }
                @media screen and (max-width: $width-tablet-small) {
                    height: 140px;
                    width: 100%!important;
    
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-end;
                    background: linear-gradient(transparent, black);
            
                    font-size: calc($piano-key-height-mobile);
                    padding-right: 0;
                    padding-bottom: calc($piano-key-height-mobile / 2);
                    letter-spacing: -0.4em;

                    writing-mode: vertical-rl;
                    text-orientation: upright;
                }
            }
        }
    }
</style>