<script>
    import CodeBackground from "$lib/components/experience/CodeBackground.svelte"

</script>
<section id="experience">
    <div class="cell"><CodeBackground animationDelay={0} /></div>
    <div class="cell"><CodeBackground animationDelay={2} /></div>
    <div class="cell"><CodeBackground animationDelay={4} /></div>

    <div class="cell"><CodeBackground animationDelay={6} /></div>
    <div class="cell slogan-beginning">I’ve coded things...</div>
    <div class="cell"><CodeBackground animationDelay={8} /></div>

    <div class="cell"><CodeBackground animationDelay={10} /></div>
    <img class="cell " src="pictures/Blade_Runner.gif" alt="Roy Batty from Blade Runner (1982)" />
    <div class="cell"><CodeBackground animationDelay={12} /></div>

    <div class="cell"><CodeBackground animationDelay={14} /></div>
    <div class="cell slogan-end">you people wouldn't even believe</div>
    <div class="cell"><CodeBackground animationDelay={16} /></div>

    <div class="cell"><CodeBackground animationDelay={18} /></div>
    <div class="cell"><CodeBackground animationDelay={20} /></div>
    <div class="cell"><CodeBackground animationDelay={22} /></div>
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

    .cell {
        display: grid;
        place-items: center;
        border: 0.5px solid lightgray;
        font-family: 'Fira Sans', sans-serif;
        text-wrap: nowrap;
        overflow: hidden;
        position: relative;
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
