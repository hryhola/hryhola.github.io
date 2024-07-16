<script>
    import Contacts from "$lib/components/Contacts.svelte";
    import HeaderQuote from "$lib/components/HeaderQuote.svelte";
    import Name from "$lib/components/Name.svelte";
    import Navigation from "$lib/components/Navigation.svelte";
</script>
<section itemscope itemtype="http://schema.org/Person">
    <HeaderQuote />
    <Name />
    <Navigation />
    <Contacts />
</section>
