<script lang="ts">
    import Title from "$lib/components/what-do-I-do/Title.svelte"
    import Image from "$lib/components/Image.svelte";
    import { isLightBulbHover  } from "$lib/scripts/helpers/context";
    import { scroller } from "$lib/scripts/SectionsScroller";

    let hqImageLoaded = false

    const letBeLight = () => isLightBulbHover.set(true)
    const letBeDark = () => isLightBulbHover.set(false)

    const scrollToThis = scroller.createFocusHandler(1)

    const focusHandler = () => {
        scrollToThis()
        letBeLight()
    }
</script>
<section id="what-do-I-do">
    <div class="crop-overflow">
        <div class="container">
            <div class="dude-wrapper" class:dude-wrapper--hqLoaded={hqImageLoaded}>
                <Image className="dude-standing"
                    lqSrc="pictures/Vladyslav_Hryhola_Standing_Desk_LQ.jpg" 
                    hqSrc="pictures/Vladyslav_Hryhola_Standing_Desk.png"
                    onHqLoaded={() => { hqImageLoaded = true }}
                    alt="Vladyslav works at a standing desk"
                />
            </div>

            <article data-is-light={$isLightBulbHover}>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <h3 on:focus={focusHandler} tabindex="0">
                    <Title text="Solve problems" />
                    <span class="light-rays-wrapper" >
                        <span class="light-rays">
                            <img
                                src="pictures/light_bulb.png"
                                alt="light bulb"
                            />
                        </span>
                    </span>
                </h3>

                <div class="article-text">
                    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                    <p tabindex="0" on:focus={focusHandler} on:mouseenter={letBeLight} on:mouseleave={letBeDark}>That’s job of an <strong>engineer</strong>.</p>
                    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                    <p tabindex="0" on:focus={focusHandler} on:mouseenter={letBeLight} on:mouseleave={letBeDark}>I seek for issues that should be <strong>fixed</strong>.</p>
                    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                    <p tabindex="0" on:focus={focusHandler} on:mouseenter={letBeLight} on:mouseleave={letBeDark}>
                        Fixed using: languages - formal and human, frameworks, platforms
                        and most importantly <strong>analytical thinking</strong>.
                    </p>
                    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                    <p tabindex="0" on:focus={focusHandler} on:mouseenter={letBeLight} on:mouseleave={letBeDark} on:blur={letBeDark}><q>The beauty of engineering lies in finding elegant solutions to complex problems</q> – Henry Petroski.</p>
                </div>
            </article>
        </div>
    </div>
</section>

<style lang="scss">
    @import '../variables.scss';

    #what-do-I-do {
        background: black;
        color: white;
        font-family: 'Fira Code', monospace;

        .crop-overflow {
            overflow: hidden;
            max-height: var(--fullHeight);
            min-height: $min-section-height;
        }

        .container {
            display: flex;
            height: 100%;
        }
    
        .dude-wrapper {
            overflow: hidden;
            width: 50%;
            display: grid;
            align-items: end;

            :global(.dude-standing) {
                width: 100%;
            }

            &--hqLoaded {
                :global(.dude-standing) {
                    z-index: 2;
                }
            }
        }

        article {
            width: 50%;
            height: var(--fullHeight);
            padding: 5% 0 5% 5%;

            &[data-is-light="true"] .light-rays{
                width: 1800px;
                height: 1800px;
                img {
                    filter: saturate(0) contrast(2)
                }
            }

            .article-text {
                height: 100%;
                min-height: 400px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
        }

        h3 {
            position: relative;
            white-space: nowrap;
        }

        .light-rays {
            z-index: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            pointer-events: none!important;

            width: 0px;
            height: 0px;

            transform: translate(calc(-50% + 3vw), calc(-50% + 2.5vw));
        
            background: radial-gradient(
                    circle,
                    white 0%,
                    rgba(255, 255, 255, 0) 75%
                );

            transition: 1s;

            @media screen and (max-width: $width-tablet) {
                transform: translate(calc(-50% + 6vw), calc(-50% + 2.5vw));
            }

            @media screen and (max-width: $width-phone) {
                transform: translate(calc(-50% + 6vw), calc(-50% + 5vw));
            }

            img {
                height: 60px;
                filter: invert(1) saturate(0);
                user-select: none;

                max-height: 10vw;
            }

            &-wrapper {
                position: absolute;
                z-index: 0;
            }
        }

        p {
            z-index: 1;
            font-size: 18px;

            &:nth-of-type(1) {
                text-shadow: -4px 3px 4px black;
            }
            &:nth-of-type(2) {
                text-shadow: -9px 6px 6px black;
            }
            &:nth-of-type(3) {
                text-shadow: -15px 10px 10px black;
            }
        
            &:nth-of-type(4) {
                text-shadow: -18px 14px 16px black;
            }

            q {
                font-style: italic;
            }
        }

        @media screen and (max-width: $width-tablet) {
            .dude-wrapper {
                display: none;
            }

            article {
                width: 100%;
                padding: 15%;
            }
        }

        @media screen and (max-width: $width-tablet) {
            .article-text {
                padding: 20% 0;
            }
        }
    }
</style>
