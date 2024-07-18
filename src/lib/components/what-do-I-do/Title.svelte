<script lang="ts">
    export let text: string

    let symbols = text.split('').map((c, i) => [
        c,
        1000 - i,
        `-${1.1 * (text.length - i)}px 0px ${1.1 * (text.length - i)}px black`
    ])
</script>

<!-- <span class="title">Solve problems</span> -->
<span class="title">
    {#each symbols as [char, z, s]}
        <span style="z-index: {z}; text-shadow: {s};">{char}</span>
    {/each}
</span>

<style lang="scss">
    .title {
        position: relative;
        font-size: 58px;
        font-weight: 600;
        z-index: 5;
        text-wrap: nowrap;

        span {
            position: relative;
        }
    }
</style>
