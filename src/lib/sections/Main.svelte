<script lang="ts">
    import Image from "$lib/components/Image.svelte"
    import Contacts from "$lib/components/main/Contacts.svelte";
    import HeaderQuote from "$lib/components/main/HeaderQuote.svelte";
    import Name from "$lib/components/main/Name.svelte";
    import Navigation from "$lib/components/main/Navigation.svelte";

    let isHeaderVisible = true

    const handleSectionScroll = (event: Event) => {
        isHeaderVisible = (event.target as HTMLDivElement).scrollTop === 0
    }
</script>
<section on:scroll={handleSectionScroll}>
    <HeaderQuote isVisible={isHeaderVisible} />
    <main class="container">
        <Name />
        <Navigation />
        <Contacts />
        <div class="dude-wrapper">
            <Image className="dude"
                lqSrc="pictures/Vladyslav_Hryhola_LQ.jpg" 
                hqSrc="pictures/Vladyslav_Hryhola.jpg" 
                alt="Vladyslav Hryhola"
            />
        </div>
    </main>
</section>
<style lang="scss">
    @import '../variables.scss';
 
    main {
        padding-top: 103px;
        padding-left: 46px;
        padding-right: 46px;
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        position: relative;
        overflow: hidden;
        min-height: $min-section-height;

        @media screen and (max-width: 490px) {
            padding-left: 7vw;
            padding-right: 7vw;
        }
    }

    .dude-wrapper {
        position: absolute;
        display: flex;
        bottom: 0;
        right: 0;
        z-index: 0;
        min-width: 50%;
        justify-content: center;

        :global(.dude) {
            z-index: 0;
            height: calc(90 * var(--vh));
            min-height: $min-section-height;
        }

        @media (max-width: $width-tablet) {
            left: 0;
            opacity: 0.2;
            position: absolute;

            :global(.dude) {
                height: calc(70 * var(--vh));
            }
        }
    }
</style>
