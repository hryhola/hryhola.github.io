<script>
    import Contacts from "$lib/components/Contacts.svelte";
    import HeaderQuote from "$lib/components/HeaderQuote.svelte";
    import Name from "$lib/components/Name.svelte";
    import Navigation from "$lib/components/Navigation.svelte";
</script>
<section itemscope itemtype="http://schema.org/Person">
    <HeaderQuote />
    <main class="container">
        <Name />
        <Navigation />
        <Contacts />
    </main>
</section>
<style>
    main {
        padding-top: 103px;
        padding-left: 46px;
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
    }
</style>