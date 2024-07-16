<script>
    import { isContactsExpanded } from "$lib/scripts/context";
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    #contacts {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.5s ease-out;

        font-family: "Fira Sans", sans-serif;
        font-size: 18px;
        font-style: normal;
    }

    #contacts a {
        text-decoration: none;
        color: black;
    }

    #contacts dt, dd {
        height: 30px;
        margin: 0;
        padding: 0;
        display: grid;
        align-items: center;
    }

    #contacts dt {
        width: var(--marker-width);
    }

    #contacts dl {
        overflow: hidden;
        display: grid;
        grid-template-columns: min-content 1fr;
        align-items: start;
        gap: 15px 0;

    }

    #contacts[data-is-open="true"] {
        grid-template-rows: 1fr;
    }
</style>
<div id="contacts" data-is-open={$isContactsExpanded}>
    <dl>
        <dt><img height="16" src="logos/telegram.svg" alt="Telegram"></dt>
        <dd><a href="https://t.me/VladHryhola" target="_blank" itemprop="sameAs">@VladHryhola</a></dd>

        <dt><img height="16" src="logos/email.svg" alt="Email"></dt>
        <dd><a href="mailto:vladyslav.hryhola@gmail.com" itemprop="email">vladyslav.hryhola@gmail.com</a></dd>

        <dt><img height="16" src="logos/phone.svg" alt="Phone Number"></dt>
        <dd><a href="tel:+380669726801" itemprop="telephone">+38 066 972 6801</a></dd>

        <dt><img height="16" src="logos/linkedin.svg" alt="Linked In"></dt>
        <dd><a href="https://linkedin.com/in/vlad-hryhola" target="_blank" itemprop="url" rel="me">linkedin.com/in/vlad-hryhola</a></dd>
    </dl>
</div>
