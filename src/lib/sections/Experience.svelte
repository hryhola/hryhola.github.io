<script lang="ts">
    import Cell from "$lib/components/experience/Cell.svelte"
    import ExpText from "$lib/components/experience/ExpText.svelte"
    import StudentExp from "$lib/components/experience/text/StudentExp.svelte"
    import { onMount } from "svelte"

    let stage: 'preview' | 'chronology' = 'preview'
    let previewFadeOut = false

    const showChronology = () => {
        previewFadeOut = true
        
        setTimeout(() => {
            stage = 'chronology'
        }, 250)
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

    const createExpander = (row: number) => () => {
        expandStyle = 'transition: 0.5s; grid-template-rows: 2fr 2fr 1fr 1fr 1fr 2fr';
    }

    const shrink = () => {
        expandStyle = 'transition: 0.5s;'
    }

    $: expandStyle = '';
    $: royBattyStyle = '';
    $: isPreview = stage === 'preview';
    $: isChronology = stage !== 'preview';
</script>
<section id="experience" style="{expandStyle}" class:show-chronology={isChronology || previewFadeOut}>
    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={0} onClick={showChronology} />
    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={2} onClick={showChronology} />
    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={4} onClick={showChronology} />

    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={6} onClick={showChronology} justifyContent="end" >
        {#if isChronology}<ExpText>Pre 2020</ExpText>{/if}
    </Cell>
    <Cell>
        {#if isChronology}
            <ExpText position="Student" />
            <StudentExp onBlur={shrink} onFocus={createExpander(0)} mobileOnly/>
        {:else}<span class="slogan-beginning" class:fade-out={previewFadeOut}>I’ve coded things...</span>{/if}
    </Cell>
    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={8} onClick={showChronology} justifyContent="start">
        {#if isChronology}<StudentExp onBlur={shrink} onFocus={createExpander(0)} desktopOnly />{/if}
    </Cell>
    
    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={10} onClick={showChronology} justifyContent="end">
        {#if isChronology}<ExpText>Sep 2020 - Jan 2021</ExpText>{/if}
    </Cell>
    <Cell>
        {#if isChronology}<ExpText position="Front-End Developer" where="AdMotion Technologies" />
        {:else}<img class:fade-out={previewFadeOut} id="roy_batty" style="{royBattyStyle}" src="pictures/Blade_Runner.gif" alt="Roy Batty from Blade Runner (1982)" />{/if}
    </Cell>
    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={12} onClick={showChronology} justifyContent="start">
        {#if isChronology}<ExpText fontSize="small">TODO: AdMotion Technologies experience</ExpText>{/if}
    </Cell>
    
    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={14} onClick={showChronology} justifyContent="end">
        {#if isChronology}<ExpText>Jun 2021 - Jul 2024</ExpText>{/if}
    </Cell>
    <Cell>
        {#if isChronology}<ExpText position="Full-Stack Developer" where="Astound Digital" />
        {:else}<span class="slogan-end" class:fade-out={previewFadeOut}>you people wouldn't even believe</span>{/if}
    </Cell>
    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={18} onClick={showChronology} justifyContent="start">
        {#if isChronology}<ExpText fontSize="small">TODO: Astound Digital experience</ExpText>{/if}
    </Cell>

    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={20} onClick={showChronology} justifyContent="end">
        {#if isChronology}<ExpText>Jul 2024 - Now</ExpText>{/if}
    </Cell>
    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={22} onClick={showChronology}>
        {#if isChronology}<ExpText position="Independent Developer" where="Private Entrepreneur" noAt />{/if}
    </Cell>
    <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={24} onClick={showChronology} justifyContent="start">
        {#if isChronology}<ExpText fontSize="small">TODO: Private Entrepreneur experience</ExpText>{/if}
    </Cell>

    <Cell />
    <Cell />
    <Cell />
</section>
<style lang="scss">
    @import '../variables.scss';

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
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows:
                2fr
                1fr
                1fr
                1fr
                1fr
                2fr;
        
            @media screen and (max-width: $width-tablet) {
                grid-template-columns: 0.6fr 1fr 1fr;
            }

            @media screen and (max-width: $width-phone) {
                grid-template-columns: 0.4fr 1fr 0fr;
            }
        }
    }

    .fade-out {
        animation: fadeOut 0.25s forwards;
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

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
</style>
