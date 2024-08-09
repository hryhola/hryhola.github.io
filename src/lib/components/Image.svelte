<script lang="ts">
    import { onMount } from "svelte"

    export let hqSrc: string
    export let lqSrc: string
    export let alt: string
    export let className: string
    export let onHqLoaded: (() => void) | undefined = undefined

    onMount(() => {
        fetch(hqSrc)
            .then(res => res.blob())
            .then(blob => {
                src = URL.createObjectURL(blob)

                if (onHqLoaded) {
                    onHqLoaded()
                }
            })
    })

    $: src = lqSrc
</script>
<img src={src} class={className} alt={alt} />
