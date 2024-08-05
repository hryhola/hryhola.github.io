<script lang="ts">
    import { onMount } from "svelte"
    import { navigating } from '$app/stores';

    let self: HTMLDivElement;
    let sectionId = 'contacts';

    function setActiveBullet() {
        sectionId = location.hash.substring(1) || 'contacts';

        if (self) {
            [...self.children].forEach(element => {
                if (element instanceof HTMLDivElement) {
                    if (element.dataset.sectionId === sectionId) {
                        element.classList.add('sections-pointer__bullet--filled')
                    } else {
                        element.classList.remove('sections-pointer__bullet--filled')
                    }
                }
            })
        }
    }

    onMount(() => {
        setActiveBullet()
        document.addEventListener('section-scroll', setActiveBullet)
    })

    $: if($navigating) setActiveBullet();
</script>

<div class="sections-pointer" class:sections-pointer--invert={sectionId === 'what-do-I-do'} bind:this={self}>
    <div class="sections-pointer__bullet sections-pointer__bullet--filled" data-section-id="contacts"></div>
    <div class="sections-pointer__bullet" data-section-id="what-do-I-do"></div>
    <div class="sections-pointer__bullet" data-section-id="skill-set"></div>
    <div class="sections-pointer__bullet" data-section-id="experience"></div>
    <div class="sections-pointer__bullet" data-section-id="education"></div>
    <div class="sections-pointer__bullet" data-section-id="certificates"></div>
    <div class="sections-pointer__bullet" data-section-id="cv"></div>
</div>
<style lang="scss">
    @import '../variables.scss';

    .sections-pointer {
        z-index: 10000;
        position: fixed;
        right: 5px;
        top: 50%;
        transform: translate(0, -50%);

        --bg: white;
        --border: black;
        --active: black;

        &--invert {
            --bg: black;
            --border: white;
            --active: white;
        }

        &__bullet {
            margin-top: 5px;
            width: 5px;
            height: 5px;
            background: var(--bg);
            border: 1px solid var(--border);

            transition: 0.25s;

            &--filled {
                background: var(--active);
            }

            &[data-section-id="certificates"] {
                display: none;

                @media screen and (max-width: $width-phone-big) {
                    display: block;
                }
            }
        }
    }
</style>