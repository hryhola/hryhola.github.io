<script lang="ts">
    import PianoKey from '$lib/components/skill-set/PianoKey.svelte'
    import skills from '$lib/components/skill-set/skills.json'
    import { audioContext } from '$lib/scripts/AudioContext'
    import { getKeyFile, shouldRenderBlackKey, getKeyWidth as getKeyDistance } from '$lib/scripts/helpers/piano'
    import { onMount } from 'svelte'
    import { scroller } from '$lib/scripts/SectionsScroller'

    let currentSkillIndex: number | undefined = 0
    let skillPianoDisabled = true

    const scrollToThis = scroller.createFocusHandler(2)

    onMount(async () => {
        audioContext.initialize()

        for (let keyIndex = 0; keyIndex < skills.length; keyIndex++) {
            audioContext.load(getKeyFile(keyIndex + 21))
        }

        document.addEventListener('click', () => {
            skillPianoDisabled = false
        }, { once: true })

        document.addEventListener('keypress', () => {
            skillPianoDisabled = false
        }, { once: true })
    });

    $: currentSkill = currentSkillIndex ? skills[currentSkillIndex] : undefined
    $: currentSkillStyles = currentSkill ? {
        style: `background: linear-gradient(var(--gradient-deg), transparent, ${currentSkill.background}); color: ${currentSkill.color};`
            + `box-shadow: var(--gradient-shadow-x) var(--gradient-shadow-y) ${currentSkill.background};`
    } : {}
    $:isLongDescriptionName = currentSkill && currentSkill.name!.length > 8
</script>

<section id="skill-set">
    <div class="container">
        <div class="piano-dude">
            <img src="pictures/Piano_Dude.png" alt="A man playing piano">
        </div>
        <div role="{skillPianoDisabled ? 'button' : 'list'}" class="skills-keys" data-disabled="{skillPianoDisabled}" on:click|once={() => { skillPianoDisabled = false; }}>
            {#each skills as skill, i}
                <PianoKey
                    noteName={skill.name}
                    isLanguage={skill.isLanguage}
                    shortNoteName={skill.shortName}
                    noteBackground={skill.background}
                    noteColor={skill.color}
                    hasBlackKey={(i === skills.length - 1) ? false : shouldRenderBlackKey(i)}
                    distance={getKeyDistance(i, skills.length)}
                    onHover={() => {
                        currentSkillIndex = i;
                        audioContext.play(getKeyFile(i + 21))
                    }}
                    onBlur={() => { currentSkillIndex = undefined }}
                    disabled={skillPianoDisabled}
                />
            {/each}
        </div>
        <div {...currentSkillStyles} class="skills-description">
            {#if currentSkill}
                <h4 class="skills-description__name"
                    class:skills-description__name--long={isLongDescriptionName}
                >
                    {currentSkill.name}
                </h4>
                <p class="skills-description__level">Level: {currentSkill.level}</p>
                <p class="skills-description__text">{currentSkill.description}</p>
            {/if}
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <span on:focus={scrollToThis} role="button" hidden={!skillPianoDisabled} tabindex="{skillPianoDisabled ? 0 : -1}" class="click-anything">Click anything!</span>

    </div>
</section>
<style lang="scss">
    @import '../variables.scss';
    @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

    #skill-set .container {
        max-width: 1980px;
        min-height: $min-section-height;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: nowrap;
        position: relative;
        z-index: 2;

        @media screen and (max-width: $width-tablet-small) {
            flex-direction: column;
            height: 100%;
        }
    }

    .piano-dude {
        filter: saturate(0);
        z-index: 11;
        pointer-events: none;
        overflow: visible;

        height: 100%;
        width: $piano-dude-width;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: nowrap;
        
        img {
            width: 100%;
            transform: translate(-50px);
        }

        @media screen and (max-width: $width-tablet-small) {
            width: 100%;
            height: calc(min(40vw, 200px));
            align-items: flex-start;
            justify-content: center;

            img {
                height: 100%;
                width: auto;
                transform: rotate(90deg) translate(-50px) scale(2);
            }
        }
    }

    .skills-keys {
        width: calc(100% - $piano-offset);
        border-left: $piano-border;
        transform: translate(calc(0px - $piano-offset));
        z-index: 10;
        transition: opacity 0.5s;

        &[data-disabled="true"] {
            opacity: 0.5;
            cursor: pointer;
        }
        @media screen and (max-width: $width-tablet-small) {
            display: flex;
            transform: translate(0, calc(0px - $piano-offset-mobile));
            width: 100%;
            border-left: none;
            border-top: $piano-border;
        }
    }
    
    .skills-description {
        position: absolute;

        text-align: right;
        font-family: 'Fira Code', monospace;

        display: flex;
        flex-flow: column nowrap;
        align-content: flex-end;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-end;
        pointer-events: none;

        --gradient-deg: 90deg;
        --gradient-shadow-x: 50px;
        --gradient-shadow-y: 0px;

        @media screen and (min-width: $width-tablet-small) {
            padding-right: 20px;
            right: 0;
            height: 100%;
            width: 50vw;
            
        }
        @media screen and (max-width: $width-tablet-small) {
            padding: 20px;
            bottom: 0;
            height: calc(50 * var(--vh));
            width: 100%;
            --gradient-deg: 180deg;
            --gradient-shadow-x: 0px;
            --gradient-shadow-y: 50px;

            flex-flow: column nowrap;
            align-content: center;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: center;
        }

        @media screen and (max-width: $width-tablet-small) and (max-height: $height-tablet) {
            justify-content: flex-end;
        }

        &__name {
            font-size: 5vw;
            font-weight: 500;

            @media screen and (max-width: $width-tablet-small) {
                font-size: 15vw;
                text-align: center;

                &--long {
                    font-size: 11vw;
                }
            }

            @media screen and (min-width: $width-tablet-small) and (max-width: $width-tablet-big) {
                &--long {
                    font-size: 3vw;
                    font-weight: 600;
                }
            }

            @media screen and (max-width: $width-tablet-small) and (max-height: $height-tablet-small) {
                font-size: 5vw;
                font-weight: 600;
            }
        }

        &__level, &__text {
            font-size: 20px;

            @media screen and (max-height: $height-tablet-small) {
                font-size: 12px;
            }
        }

        &__level {
            margin: 30px 0;

            @media screen and (max-width: $width-tablet-big) {
                margin: 0 0 10px 0;
            }

            @media screen and (max-width: $width-tablet-small) and (max-height: $height-tablet) {
                margin: 0;
            }
        }

        &__text {
            max-width: 50%;

            @media screen and (max-width: $width-tablet-small) {
                margin-top: 0px;
                max-width: 100%;
                text-align: center;
            }
        }
    }

    .click-anything {
        font-family: 'Fira Code', monospace;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        box-shadow: white 0px 0px 15px 15px;
        background: white;
        cursor: pointer;
    }
</style>
