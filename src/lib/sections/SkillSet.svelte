<script lang="ts">
    import PianoKey from '$lib/components/skill-set/PianoKey.svelte'
    import skills from '$lib/components/skill-set/skills.json'
    import { audioContext } from '$lib/scripts/AudioContext'
    import { getKeyFile, shouldRenderBlackKey, getKeyWidth as getKeyDistance } from '$lib/scripts/piano'
    import { onMount } from 'svelte'

    let currentSkillIndex: number | undefined = 2
    let skillPianoDisabled = true

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
    $: gradientDeg = '90deg'
    $: currentSkillStyles = currentSkill ? {
        style: `background: linear-gradient(var(--gradient-deg), transparent, ${currentSkill.background}); color: ${currentSkill.color}`
    } : {}
</script>

<section id="skill-set">
    <div class="container">
        <div class="piano-dude">
            <img src="pictures/Piano_Dude.png" alt="A man playing piano">
        </div>
        <div role="{skillPianoDisabled ? 'button' : 'banner'}" class="skills-keys" data-disabled="{skillPianoDisabled}" on:click|once={() => { skillPianoDisabled = false; }}>
            {#each skills as skill, i}
                <PianoKey
                    noteName={skill.name}
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
                <h4 class="skills-description__name">{currentSkill.name}</h4>
                <p class="skills-description__level">Level: {currentSkill.level}</p>
                <p class="skills-description__text">{currentSkill.description}</p>
            {/if}
        </div>
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

        @media screen and (max-width: $width-phone-plus) {
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

        @media screen and (max-width: $width-phone-plus) {
            width: 100%;
            height: 300px;

            img {
                transform: rotate(90deg) translate(-50px);
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
        @media screen and (max-width: $width-phone-plus) {
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

        @media screen and (min-width: $width-phone-plus) {
            padding-right: 20px;
            right: 0;
            height: 100%;
            width: 50vw;
            
        }
        @media screen and (max-width: $width-phone-plus) {
            padding: 20px;
            bottom: 0;
            height: 40vh;
            width: 100%;
            --gradient-deg: 180deg;

            flex-flow: column nowrap;
            align-content: center;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: center;
        }

        &__name {
            font-size: 84px;
            font-weight: 500;

            @media screen and (max-width: $width-phone-plus) {
                font-size: 15vw;
                text-align: center;
            }
        }

        &__level, &__text {
            font-size: 20px;
        }

        &__text {
            margin-top: 30px;
            max-width: 50%;

            @media screen and (max-width: $width-phone-plus) {
                margin-top: 0px;
                max-width: 100%;
                text-align: center;
            }
        }
    }
</style>
