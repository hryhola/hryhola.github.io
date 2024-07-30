<script lang="ts">
    import Cell from "$lib/components/experience/Cell.svelte"
    import ExpText from "$lib/components/experience/ExpText.svelte"
    import { onMount } from "svelte"

    let stage: 'preview' | 'chronology' = 'preview'

    const showChronology = () => {
        stage = 'chronology'
    }

    const scaleRoyImg = () => {
        const royImg = document.getElementById('roy_batty')! as HTMLImageElement;

        const imgHeight = royImg.height;
        const imgWidth = royImg.width;

        const wrapperHeight = royImg.parentElement!.clientHeight;
        const wrapperWidth = royImg.parentElement!.clientWidth;

        const heightDifference = wrapperHeight / imgHeight;
        const widthDifference = wrapperWidth / imgWidth;

        const maxDifference = Math.max(heightDifference, widthDifference)

        if (maxDifference > 1) {
            royBattyStyle = `transform: scale(${maxDifference})`
        } else {
            royBattyStyle = ''
        }
    }

    onMount(() => {
        scaleRoyImg()

        window.addEventListener('resize', scaleRoyImg)
    })

    $: royBattyStyle = '';
    $: isPreview = stage === 'preview';
    $: isChronology = stage !== 'preview';
</script>
<section id="experience" class:show-chronology={isChronology}>
    <Cell buttonRole={isPreview} buttonAnimationDelay={0} onClick={showChronology} />
    <Cell buttonRole={isPreview} buttonAnimationDelay={2} onClick={showChronology} />
    <Cell buttonRole={isPreview} buttonAnimationDelay={4} onClick={showChronology} />

    <Cell buttonRole={isPreview} buttonAnimationDelay={6} onClick={showChronology} justifyContent="end" >
        {#if isChronology}<ExpText>Pre 2020</ExpText>{/if}
    </Cell>
    <Cell>
        {#if isChronology}<ExpText position="Student" />
        {:else}<span class="slogan-beginning">I’ve coded things...</span>{/if}
    </Cell>
    <Cell buttonRole={isPreview} buttonAnimationDelay={8} onClick={showChronology} justifyContent="start">
        {#if isChronology}
            <ExpText fontSize="small">
                At college, my associate’s diploma project was based on the implementation of a serverless freelancer platform using React, Redux, and Firebase.
                <br />
                At university, my bachelor's diploma project focused on creating and deploying a platform for real-time, multiplayer interactive activities utilizing Next.js and uWebSockets.
            </ExpText>
        {/if}
    </Cell>
    
    <Cell buttonRole={isPreview} buttonAnimationDelay={10} onClick={showChronology} justifyContent="end">
        {#if isChronology}<ExpText>Sep 2020 - Jan 2021</ExpText>{/if}
    </Cell>
    <Cell>
        {#if isChronology}<ExpText position="Front-End Developer" where="AdMotion Technologies" />
        {:else}<img id="roy_batty" style="{royBattyStyle}" src="pictures/Blade_Runner.gif" alt="Roy Batty from Blade Runner (1982)" />{/if}
    </Cell>
    <Cell buttonRole={isPreview} buttonAnimationDelay={12} onClick={showChronology} justifyContent="start">
        {#if isChronology}<ExpText fontSize="small">TODO: AdMotion Technologies experience</ExpText>{/if}
    </Cell>
    
    <Cell buttonRole={isPreview} buttonAnimationDelay={14} onClick={showChronology} justifyContent="end">
        {#if isChronology}<ExpText>Jun 2021 - Jul 2024</ExpText>{/if}
    </Cell>
    <Cell>
        {#if isChronology}<ExpText position="Full-Stack Developer" where="Astound Digital" />
        {:else}<span class="slogan-end">you people wouldn't even believe</span>{/if}
    </Cell>
    <Cell buttonRole={isPreview} buttonAnimationDelay={18} onClick={showChronology} justifyContent="start">
        {#if isChronology}<ExpText fontSize="small">TODO: Astound Digital experience</ExpText>{/if}
    </Cell>

    <Cell buttonRole={isPreview} buttonAnimationDelay={20} onClick={showChronology} justifyContent="end">
        {#if isChronology}<ExpText>Jul 2024 - Now</ExpText>{/if}
    </Cell>
    <Cell buttonRole={isPreview} buttonAnimationDelay={22} onClick={showChronology}>
        {#if isChronology}<ExpText position="Independent Developer" where="Private Entrepreneur" noAt />{/if}
    </Cell>
    <Cell buttonRole={isPreview} buttonAnimationDelay={24} onClick={showChronology} justifyContent="start">
        {#if isChronology}<ExpText fontSize="small">TODO: Private Entrepreneur experience</ExpText>{/if}
    </Cell>

    <Cell />
    <Cell />
    <Cell />
</section>
<style lang="scss">
    #experience {
        display: grid;
        
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows:
            2fr
            1fr
            2.2fr
            1fr
            2fr
            0fr;

        transition: 1.5s ease-out;

        &.show-chronology {
            grid-template-rows:
                2fr
                1fr
                1fr
                1fr
                1fr
                2fr;
        }
    }

    #roy_batty {
        position: absolute;
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
