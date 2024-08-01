<script lang="ts">
    import Cell from "$lib/components/experience/Cell.svelte"
    import ExpText from "$lib/components/experience/ExpText.svelte"
    import StudentExp from "$lib/components/experience/text/StudentExp.svelte"
    import AdMotionExp from "$lib/components/experience/text/AdMotionExp.svelte"
    import AstoundExp from "$lib/components/experience/text/AstoundExp.svelte"
    import IndependentExp from "$lib/components/experience/text/IndependentExp.svelte"
    import { scroller } from "$lib/scripts/SectionsScroller";
    import { replaceFrValue } from "$lib/scripts/helpers/style"
    import { debounce } from "$lib/scripts/helpers/function"
    import { onMount } from "svelte"

    let stage: 'preview' | 'chronology' = 'preview'
    let previewFadeOut = false

    const scrollToThis = scroller.createFocusHandler(3)

    const showChronology = () => {
        previewFadeOut = true
        
        setTimeout(() => {
            stage = 'chronology'
        }, 250)
    }

    const scaleRoyImg = () => {
        const royImg = document.getElementById('roy_batty') as HTMLImageElement | undefined;

        if (!royImg) {
            return
        }

        const imgHeight = royImg.height;
        const imgWidth = royImg.width;

        const wrapperHeight = royImg.parentElement?.clientHeight;
        const wrapperWidth = royImg.parentElement?.clientWidth;

        if (typeof imgHeight !== 'number' ||
            typeof imgWidth !== 'number' ||
            typeof wrapperHeight !== 'number' ||
            typeof wrapperWidth !== 'number'
        ) {
            return
        }

        const heightDifference = wrapperHeight / imgHeight;
        const widthDifference = wrapperWidth / imgWidth;

        const maxDifference = Math.max(heightDifference, widthDifference)

        royBattyStyle = `transform: scale(${maxDifference})`
    }

    onMount(() => {
        scaleRoyImg()

        window.addEventListener('resize', debounce(scaleRoyImg))
    })

    const rowIndexMapping =  {
        'student-exp': 0,
        'adMotion-exp': 1,
        'astound-exp': 2,
        'independent-exp': 3
    }

    const createExpander = (dataLabel: keyof typeof rowIndexMapping) => () => {
        scrollToThis()

        const rowIndex = rowIndexMapping[dataLabel];

        if (typeof rowIndex !== 'number') {
            console.error('Invalid dataLabel', dataLabel);
            return;
        }

        const targets = [...document.querySelectorAll(`div[data-label=${dataLabel}]`)] as [HTMLDivElement, HTMLDivElement]

        if (targets.length !== 2) {
            console.error('Experience article is missing view port version:', dataLabel)
            return
        }

        const [desktop, mobile] = targets.sort((div) => div.classList.contains('experience-text--mobile') ? 1 : -1);

        const isDesktop = window.innerWidth > 420;

        let totalTargetHeight: number;

        if (isDesktop) {
            totalTargetHeight = desktop.clientHeight;
        } else {
            totalTargetHeight = mobile.parentElement!.scrollHeight;
        }

        const gridTemplateRows = replaceFrValue(
            [2, 1, 1, 1, 1, 2],
            rowIndex + 1,
            window.innerHeight,
            totalTargetHeight
        );

        expandStyle = `transition: 0.5s; grid-template-rows: ${gridTemplateRows}`;
    }

    const studentExpander = createExpander('student-exp')
    const adMotionExpander = createExpander('adMotion-exp')
    const astoundExpander = createExpander('astound-exp')
    const independentExpander = createExpander('independent-exp')

    const shrink = () => {
        expandStyle = 'transition: 0.5s;'
    }

    $: expandStyle = '';
    $: royBattyStyle = '';
    $: isPreview = stage === 'preview';
    $: isChronology = stage !== 'preview';
</script>
<section id="experience">
    <div style="{expandStyle}" class="experience-content" class:show-chronology={isChronology || previewFadeOut}>
        <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={0} onClick={showChronology} />
        <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={2} onClick={showChronology} />
        <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={4} onClick={showChronology} />

        <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={6} onClick={showChronology} justifyContent="end" >
            {#if isChronology}<ExpText>Pre 2020</ExpText>{/if}
        </Cell>
        <Cell>
            {#if isChronology}
                <ExpText position="Student" />
                <StudentExp onBlur={shrink} onFocus={studentExpander} mobileOnly/>
            {:else}
                <span class="slogan-beginning" class:fade-out={previewFadeOut}>I’ve coded things...</span>
            {/if}
        </Cell>
        <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={8} onClick={showChronology} justifyContent="start">
            {#if isChronology}<StudentExp onBlur={shrink} onFocus={studentExpander} desktopOnly />{/if}
        </Cell>
        
        <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={10} onClick={showChronology} justifyContent="end">
            {#if isChronology}<ExpText>Sep 2020 - Jan 2021</ExpText>{/if}
        </Cell>
        <Cell>
            {#if isChronology}
                <ExpText position="Front-End Developer" where="AdMotion Technologies" />
                <AdMotionExp onBlur={shrink} onFocus={adMotionExpander} mobileOnly />
            {:else}
                <img class:fade-out={previewFadeOut} id="roy_batty" style="{royBattyStyle}" src="pictures/Blade_Runner.gif" alt="Roy Batty from Blade Runner (1982)" />
            {/if}
        </Cell>
        <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={12} onClick={showChronology} justifyContent="start">
            {#if isChronology}<AdMotionExp onBlur={shrink} onFocus={adMotionExpander} desktopOnly />{/if}
        </Cell>
        
        <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={14} onClick={showChronology} justifyContent="end">
            {#if isChronology}<ExpText>Jun 2021 - Jul 2024</ExpText>{/if}
        </Cell>
        <Cell>
            {#if isChronology}
                <ExpText position="Full-Stack Developer" where="Astound Digital" />
                <AstoundExp onBlur={shrink} onFocus={astoundExpander} mobileOnly/>
            {:else}
                <span class="slogan-end" class:fade-out={previewFadeOut}>you people wouldn't even believe</span>
            {/if}
        </Cell>
        <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={18} onClick={showChronology} justifyContent="start">
            {#if isChronology}<AstoundExp onBlur={shrink} onFocus={astoundExpander} desktopOnly/>{/if}
        </Cell>

        <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={20} onClick={showChronology} justifyContent="end">
            {#if isChronology}<ExpText>Jul 2024 - Now</ExpText>{/if}
        </Cell>
        <Cell mobilePreview buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={22} onClick={showChronology}>
            {#if isChronology}
                <ExpText position="Independent Developer" where="Private Entrepreneur" noAt />
                <IndependentExp onBlur={shrink} onFocus={independentExpander} mobileOnly/>
            {/if}
        </Cell>
        <Cell buttonRole={isPreview && !previewFadeOut} buttonAnimationDelay={24} onClick={showChronology} justifyContent="start">
            {#if isChronology}
                <IndependentExp onBlur={shrink} onFocus={independentExpander} desktopOnly/>
            {/if}
        </Cell>

        <Cell />
        <Cell />
        <Cell />
    </div>
</section>
<style lang="scss">
    @import '../variables.scss';

    .experience-content {
        height: 100%;
        min-height: $min-section-height;

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

        @media screen and (max-width: $width-tablet-big) {
            grid-template-columns: 1fr 2fr 1fr;
        }
    
        @media screen and (max-width: $height-tablet-small) {
            grid-template-columns: 0.2fr 2fr 0.2fr;
        }

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
            font-size: 3.9vw;
            font-weight: 600;
        }

        &-end {
            font-size: 1.4vw;
            font-weight: 200;
            letter-spacing: 0.25em;
        }

        @media screen and (max-width: $width-tablet-big) {
            &-beginning {
                font-size: 5.75vw;
            }

            &-end {
                font-size: 2.1vw;
            }
        }

        @media screen and (max-width: $height-tablet-small) {
            &-beginning {
                font-size: 9.5vw;
            }

            &-end {
                font-size: 3.5vw;
            }
        }
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
</style>
