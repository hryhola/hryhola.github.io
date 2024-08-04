<script lang="ts">
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
            <img class="dude" src="pictures/Dude.png" alt="dude" />
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

        img {
            z-index: 0;
            height: calc(90 * var(--vh));
            min-height: $min-section-height;
            filter: saturate(0);
        }

        @media (max-width: 1000px) {
            visibility: hidden;
        }
    }
</style>
