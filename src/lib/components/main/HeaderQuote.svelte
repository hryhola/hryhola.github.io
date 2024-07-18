<script lang="ts">
    let hoverOverDE = false
    let hoverOverEN = false

    $: hover = hoverOverDE || hoverOverEN;
</script>

<blockquote class="kant-quote" cite="https://de.wikisource.org/wiki/Seite:Allgemeine_Naturgeschichte_und_Theorie_des_Himmels.djvu/33">
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <span
        role="note"
        on:mouseover={() => { hoverOverDE = true }}
        on:mouseleave={() => { hoverOverDE = false }}
        id="de"
        data-hover="{hover}"
    >
        Gebet mir Materie, ich will eine Welt daraus bauen!
    </span>
</blockquote>
<blockquote class="kant-quote">
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <span
        role="note"
        on:mouseover={() => { hoverOverEN = true }}
        on:mouseleave={() => { hoverOverEN = false }}
        id="en"
        data-hover="{hover}"
    >
        Give me matter, I will build a world out of it!</span>
</blockquote>

<style lang="scss">
    .kant-quote {
        position: absolute;
        text-align: center;
        top: 0;
        width: 100%;
        padding: 43px 0 0 0;
        z-index: 1;

        &:last-of-type {
            pointer-events: none;
        }

        span {
            font-family: 'Fira Sans Condensed', sans-serif;
            font-weight: 200;
            font-size: 12px;
            text-align: center;
            transition: 2s;
            letter-spacing: 4.2px;
        }
    }

    #de {
        user-select: none;

        &[data-hover="true"] {
            opacity: 0;
            filter: blur(4px);
        }
    }

    #en {
        pointer-events: all;

        &[data-hover="false"] {
            opacity: 0;
            filter: blur(4px);
        }

        &[data-hover="true"] {
            opacity: 1;
        }
    }
</style>
