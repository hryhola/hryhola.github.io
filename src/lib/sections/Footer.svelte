<script lang="ts">
    import { scroller } from "$lib/scripts/SectionsScroller";
    import { isContactsExpanded } from "$lib/scripts/helpers/context";

    const scrollToContacts = scroller.createFocusHandler(0)
    const scrollToThis = scroller.createFocusHandler(scroller.maxSection)

    const gotoContacts = () => {
        scrollToContacts()
        isContactsExpanded.set(true)
    }
</script>
<section id="cv">
    <div>
        download as cv: <a on:focus={scrollToThis} href="/cv/CV_Vladyslav_Hryhola.docx" target="_blank">docx</a> | <a on:focus={scrollToThis} href="/cv/CV_Vladyslav_Hryhola.pdf" target="_blank">pdf</a>
    </div>

    <a on:focus={scrollToThis} on:click={gotoContacts} href="#contacts">contacts</a>
    
    <footer>Vladyslav Hryhola PE - {(new Date()).getFullYear()}</footer>
</section>
<style lang="scss">
    #cv {
        display: grid;
        place-items: center;
        font-family: 'Fira Sans', sans-serif;
    }

    footer {
        color: gray;
        font-weight: 200;
    }
</style>
