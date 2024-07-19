<script lang="ts">
    import { isContactsExpanded } from "$lib/scripts/context";
    import ContactItem from "./ContactItem.svelte"
</script>
<div id="contacts" aria-hidden="{$isContactsExpanded}" data-is-open={$isContactsExpanded}>
    <dl>
        <ContactItem
            href="https://t.me/VladHryhola"
            target="_blank"
            itemprop="sameAs"
            text="@VladHryhola"
            imgAlt="Telegram"
            imgSrc="logos/telegram.svg"
        />
        <ContactItem
            href="mailto:vladyslav.hryhola@gmail.com"
            itemprop="email"
            text="vladyslav.hryhola@gmail.com"
            imgAlt="Email"
            imgSrc="logos/email.svg"
        />
        <ContactItem
            href="tel:+380669726801"
            itemprop="telephone"
            text="+38 066 972 6801"
            imgAlt="Phone Number"
            imgSrc="logos/phone.svg"
        />
        <ContactItem
            href="https://linkedin.com/in/vlad-hryhola"
            itemprop="url"
            text="linkedin.com/in/vlad-hryhola"
            imgAlt="Linked In"
            imgSrc="logos/linkedin.svg"
            target="_blank"
        />
</div>
<style lang="scss">
    @import '../../variables.scss';
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    #contacts {
        display: grid;
        grid-template-rows: 0fr;
        transition: 0.5s ease-out;

        font-family: "Fira Sans", sans-serif;
        font-size: 18px;
        font-style: normal;

        @media screen and (max-width: $width-tablet) {
            font-size: $font-size-tablet;
        }

        @media screen and (max-width: $width-phone) {
            font-size: $font-size-phone;
        }

        &[data-is-open="true"] {
            grid-template-rows: 1fr;
            padding-bottom: 6px;
        }

        dl {
            overflow: hidden;
            display: grid;
            grid-template-columns: min-content min-content;
            align-items: start;
            gap: 15px 0;
            
            @media screen and (max-width: $width-phone) {
                grid-template-columns: min-content 1fr;
            }
        }
    }
</style>
