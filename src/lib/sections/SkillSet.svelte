<script lang="ts">
    import PianoKey from '$lib/components/skill-set/PianoKey.svelte'
    import skills from '$lib/components/skill-set/skills.json'
    import { audioContext } from '$lib/scripts/AudioContext'
    import { getKeyFile, shouldRenderBlackKey, getKeyWidth } from '$lib/scripts/piano'
    import { onMount } from 'svelte'

    let currentSkillIndex: number | undefined = undefined
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
    $: currentSkillStyles = currentSkill ? {
        style: `background: linear-gradient(90deg, transparent, ${currentSkill.background}); color: ${currentSkill.color}`
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
                    noteBackground={skill.background}
                    noteColor={skill.color}
                    hasBlackKey={(i === skills.length - 1) ? false : shouldRenderBlackKey(i)}
                    width={getKeyWidth(i, skills.length)}
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
    @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

    #skill-set .container {
        max-width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: nowrap;
    }

    .piano-dude {
        filter: saturate(0);
        z-index: 11;
        pointer-events: none;
        
        img {
            max-width: 550px;
            transform: translate(-50px);
        }
    }

    .skills-keys {
        height: 100vh;
        width: calc(100% - 186px);
        border-left: 15px solid black;
        transform: translate(-186px);
        z-index: 10;
        transition: opacity 0.5s;

        &[data-disabled="true"] {
            opacity: 0.5;
            cursor: pointer;
        }
    }
    
    .skills-description {
        position: absolute;
        right: 0;
        height: 100vh;
        width: 50vw;

        text-align: right;
        font-family: 'Fira Code', monospace;

        display: flex;
        flex-flow: column nowrap;
        align-content: flex-end;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-end;
        padding-right: 20px;

        &__name {
            font-size: 84px;
            font-weight: 500;
        }

        &__level, &__text {
            font-size: 20px;
        }

        &__text {
            margin-top: 30px;
            max-width: 50%;
        }
    }
</style>
