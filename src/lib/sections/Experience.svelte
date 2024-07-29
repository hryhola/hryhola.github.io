<script lang="ts">
    import Cell from "$lib/components/experience/Cell.svelte"

    let stage: 'preview' | 'chronology' = 'preview'

    $: isPreview = stage === 'preview';
    $: isChronology = stage !== 'preview';
</script>
<section id="experience">
    <Cell buttonRole={isPreview} buttonAnimationDelay={0} />
    <Cell buttonRole={isPreview} buttonAnimationDelay={2} />
    <Cell buttonRole={isPreview} buttonAnimationDelay={4} />

    <Cell buttonRole={isPreview} buttonAnimationDelay={6} />
    <Cell><span class="slogan-beginning">I’ve coded things...</span></Cell>
    <Cell buttonRole={isPreview} buttonAnimationDelay={8} />
    
    <Cell buttonRole={isPreview} buttonAnimationDelay={10} />
    <Cell><img src="pictures/Blade_Runner.gif" alt="Roy Batty from Blade Runner (1982)" /></Cell>
    <Cell buttonRole={isPreview} buttonAnimationDelay={12} />
    
    <Cell buttonRole={isPreview} buttonAnimationDelay={14} />
    <Cell><span class="slogan-end">you people wouldn't even believe</span></Cell>
    <Cell buttonRole={isPreview} buttonAnimationDelay={18} />

    <Cell buttonRole={isPreview} buttonAnimationDelay={20} />
    <Cell buttonRole={isPreview} buttonAnimationDelay={22} />
    <Cell buttonRole={isPreview} buttonAnimationDelay={24} />
</section>
<style lang="scss">
    #experience {
        display: grid;
        
        grid-template-columns: 1fr min-content 1fr;
        grid-template-rows:
            2fr
            1fr
            min-content
            1fr
            2fr;
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
