<script lang="ts">
    import ExpText from "../ExpText.svelte"

    export let mobileOnly = false
    export let desktopOnly = false
    export let onFocus: () => void | undefined
    export let onBlur: () => void | undefined
</script>

<ExpText dataLabel="labs-exp" fontSize="small" onFocus={onFocus} onBlur={onBlur} mask interactive mobileOnly={mobileOnly} desktopOnly={desktopOnly}>
    Building composable storefronts for such brands as <strong>See's Candies</strong> and <strong>Horizon Hobby</strong>.
    <br />
    <br />
    Using <strong>React</strong> and <strong>PWA Kit</strong> as the main tools.
</ExpText>
