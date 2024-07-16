<script>
    import { isContactsExpanded } from "$lib/scripts/context";
</script>
<style>
    #contacts {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.2s ease-out;
    }

    #contacts dl {
        overflow: hidden;
    }

    #contacts[data-is-open="true"] {
        grid-template-rows: 1fr;
    }
</style>
<div id="contacts" data-is-open={$isContactsExpanded}>
    <dl>
        <dt><img width="20" src="logos/telegram.svg" alt="Telegram"></dt>
        <dd><a href="https://t.me/VladHryhola" itemprop="sameAs">@VladHryhola</a></dd>

        <dt><img width="20" src="logos/email.svg" alt="Email"></dt>
        <dd><a href="mailto:vladyslav.hryhola@gmail.com" itemprop="email">vladyslav.hryhola@gmail.com</a></dd>

        <dt><img width="20" src="logos/phone.svg" alt="Phone Number"></dt>
        <dd><a href="tel:+380669726801" itemprop="telephone">+38 066 972 6801</a></dd>

        <dt><img width="20" src="logos/linkedin.svg" alt="Linked In"></dt>
        <dd><a href="https://linkedin.com/in/vlad-hryhola" itemprop="url" rel="me">linkedin.com/in/vlad-hryhola</a></dd>
    </dl>
</div>
