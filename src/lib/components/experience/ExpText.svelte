<script lang="ts">
    export let desktopOnly = false
    export let mobileOnly = false
    export let mask = false
    export let interactive = false
    export let noAt = false
    export let dataLabel: string | undefined = undefined
    export let position: string | undefined = undefined
    export let where: string | undefined = undefined
    export let fontSize: 'small' | 'normal' = 'normal'
    export let onFocus: undefined | (() => void) = undefined
    export let onBlur: undefined | (() => void) = undefined
</script>
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="experience-text"
    class:experience-text--small={fontSize === 'small'}
    class:experience-text--mask={mask}
    class:experience-text--mobile={mobileOnly}
    class:experience-text--desktop={desktopOnly}
    on:mouseenter={onFocus}
    on:mouseleave={onBlur}
    on:focus={onFocus}
    on:blur={onBlur}
    tabindex={interactive ? 0 : -1}
    role={interactive ? 'article' : 'none'}
    data-label="{dataLabel}"
>
    <slot />
    {#if position}
        <span class="experience-text__position">{position}</span>
    {/if}
    {#if where}
        <br class="experience-text__at-break"/>
        <span class="experience-text__at" class:experience-text__at--no-at={noAt}>{noAt ? ',' : 'at'}</span>
    {/if}
    {#if where}
        <span class="experience-text__where" class:experience-text__where--no-at={noAt}>{where}</span>
    {/if}
</div>
<style lang="scss">
    @import '../../variables.scss';

    .experience-text {
        padding: 10px;

        font-size: 21px;
        font-weight: 300;
        text-wrap: wrap;
        text-align: center;
        
        animation: fadeIn 2s 0.25s ease-out forwards;

        opacity: 0;

        :global(strong) {
            font-weight: 400;
        }

        @media screen and (max-width: $width-desktop) {
            font-size: 16px;
        }

        @media screen and (max-width: $width-tablet-big) {
            font-size: 14px;
        }

        @media screen and (max-width: 955px) {
            &__at-break {
                display: block!important;
            }

            &__at--no-at {
                display: none;
            }
        }

        &--small {
            font-size: 14px;
            font-weight: 200;
        }

        &--mask {
            color: lightgray;
            transition: color 0.5s;
            mask-image: linear-gradient(white, transparent);

            &:hover, &:focus {
                mask-image: none;
                color: black;
            }
        }

        &--desktop {
            display: block;

            @media screen and (max-width: $width-phone) {
                display: none;
            }
        }

        &--mobile {
            display: none;

            @media screen and (max-width: $width-phone) {
                display: block;
            }
        }

        &__position {
            font-weight: 400;
        }

        &__at {
            font-weight: 100;
            
            &--no-at {
                position: relative;
                left: -4px;
            }
        }

        &__at-break {
            display: none;
        }

        &__where {
            font-weight: 200;
            font-style: italic;

            &--no-at {
                position: relative;
                left: -4px;
            }
        }
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>
