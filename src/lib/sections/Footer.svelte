<script lang="ts">
    import { scroller } from "$lib/scripts/SectionsScroller";
    import { isContactsExpanded } from "$lib/scripts/helpers/context";

    const scrollToContacts = scroller.createFocusHandler(0)

    const gotoContacts = () => {
        scrollToContacts()
        isContactsExpanded.set(true)
    }
</script>
<section id="cv">
    <div>
        download as cv: <a href="/cv/CV_Vladyslav_Hryhola.docx" target="_blank">docx</a> | <a href="/cv/CV_Vladyslav_Hryhola.pdf" target="_blank">pdf</a>
    </div>

    <a on:click={gotoContacts} href="#contacts">contacts</a>
    
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
