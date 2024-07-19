<script>
    import Contacts from "$lib/components/main/Contacts.svelte";
    import HeaderQuote from "$lib/components/main/HeaderQuote.svelte";
    import Name from "$lib/components/main/Name.svelte";
    import Navigation from "$lib/components/main/Navigation.svelte";
</script>
<section itemscope itemtype="http://schema.org/Person">
    <HeaderQuote />
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
        min-height: 550px;

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
            height: 90vh;
            min-height: 550px;
            filter: saturate(0);
        }

        @media (max-width: 1000px) {
            visibility: hidden;
        }
    }
</style>
