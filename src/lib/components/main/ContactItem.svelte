<script lang="ts">
    import { isContactsExpanded } from "$lib/scripts/helpers/context";
    import { scroller } from '$lib/scripts/SectionsScroller';

    export let imgSrc: string
    export let imgAlt: string
    export let text: string
    export let href: string
    export let target: string | undefined = undefined
    export let itemprop: string

    let isLogoHover = false
    let isTextHover = false
    let isLinkFocus = false
    let isButtonFocus = false

    let tooltip: HTMLSpanElement;
    let tooltipHideDebounce: number;

    const scrollToThis = scroller.createFocusHandler(0);

    const setLogoHover = (value: boolean) => { isLogoHover = value }
    const setTextHover = (value: boolean) => { isTextHover = value }
    const setIsButtonFocus = (value: boolean) => {
        if (value)
            scrollToThis();

        isButtonFocus = value
    }

    const setIsLinkFocus = (value: boolean) => { 
        if (value) {
            isLinkFocus = true
            scrollToThis();
        } else {
            setTimeout(() => {
                isLinkFocus = false
            }, 200);
        }
    }

    const copyIntoClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                if (tooltipHideDebounce) {
                    clearTimeout(tooltipHideDebounce)
                    setTimeout(() => {
                        tooltip.dataset.active = 'false'
                    }, 0)
                }
                setTimeout(() => {
                    tooltip.dataset.active = 'true'
                }, 100);

                tooltipHideDebounce = setTimeout(() => {
                    tooltip.dataset.active = 'false'
                }, 1000)
            })
            .catch(e => console.error(e));
    }

    $: isActive = $isContactsExpanded && (isLogoHover || isTextHover || isLinkFocus || isButtonFocus)
    $: copyButtonAttributes = isActive ? {} : { disabled: true }
    $: tooltipAttributes = $isContactsExpanded ? {} : { hidden: true }
</script>

<dt
    on:mouseenter={() => setLogoHover(true)}
    on:mouseleave={() => setLogoHover(false)}
>
    <img height="16" src={imgSrc} alt={imgAlt} />
</dt>
<dd
    on:mouseenter={() => setTextHover(true)}
    on:mouseleave={() => setTextHover(false)}
>
    <a tabindex="{$isContactsExpanded ? 0 : -1}" href={href} {target} {itemprop} on:focus={() => setIsLinkFocus(true)} on:blur={() => setIsLinkFocus(false)} >{text}</a>
    <div class="copy-wrapper">
        <button
            {...copyButtonAttributes}
            on:focus={() => setIsButtonFocus(true)}
            on:blur={() => setIsButtonFocus(false)}
            on:click={copyIntoClipboard}
        >
            <img height="16" src="logos/copy.svg" alt="Copy" />
        </button>
        <span role="tooltip" {...tooltipAttributes} bind:this={tooltip} class="tooltip"><span class="tooltip__text">Copied&nbsp;</span>✓</span>
    </div>
</dd>

<style lang="scss">
    @import '../../variables.scss';

    @keyframes tooltip {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    .tooltip {
        position: absolute;
        font-size: 12px;
        margin-top: 9px;
        margin-left: 9px;
        opacity: 0;
        pointer-events: none;
        animation-play-state: paused;

        &[data-active="true"] {
            animation-name: tooltip;
            animation-duration: 1s;
            animation-play-state: running;
        }

        @media screen and (max-width: $width-phone) {
            margin-left: 4px;

            &__text {
                display: none;
            }
        }
    }

    img {
        filter: invert(1);
    }

    a {
        margin-right: 6px;
        text-decoration: none;
        color: white;
        transition: 0.2s;
        outline-offset: 4px;
        text-wrap: nowrap;

        &[target='_blank']:hover {
            text-decoration: underline;
        }

        &:focus {
            outline: 1px solid white;
            outline-offset: 0px;
        }

        @media screen and (max-width: $width-tablet) {
            margin-right: 0px;
        }

        @media screen and (max-width: $width-phone-small) {
            font-size: calc($font-size-phone * 0.9);
        }
    }

    dt,
    dd {
        height: 30px;
        display: flex;
        flex-flow: row;
        flex-wrap: nowrap;
        background: black;
        align-items: center;
        justify-content: space-between;
    }

    dt {
        padding-left: 6px;
        width: $marker-width;

        &:hover + dd .copy-wrapper button {
            width: 30px;
        }

        
    }

    dd {
        .copy-wrapper {
            width: 30px;
            background: white;
        }

        button {
            width: 0px;
            overflow: hidden;
            height: 30px;
            outline: none;
            border: none;
            cursor: pointer;
            background: black;
            transition: 0.2s;

            &:focus {
                width: 30px;
                outline: 1px solid white;
                outline-offset: -4px;
            }

            @media screen and (max-width: $width-tablet) {
                width: 30px;
            }
        }

        &:hover button {
            width: 30px;
        }

        & a:focus ~ .copy-wrapper button {
            width: 30px;
        }
    }
</style>
