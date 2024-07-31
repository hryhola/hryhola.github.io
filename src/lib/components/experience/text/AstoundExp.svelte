<script lang="ts">
    import ExpText from "../ExpText.svelte"

    export let mobileOnly = false
    export let desktopOnly = false
    export let onFocus: () => void | undefined
    export let onBlur: () => void | undefined
</script>

<ExpText dataLabel="astound-exp" fontSize="small" onFocus={onFocus} onBlur={onBlur} mask interactive mobileOnly={mobileOnly} desktopOnly={desktopOnly}>
    TODO: Astound Exp Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat quibusdam soluta illum dolore quod labore placeat, nesciunt, ut, enim quo dicta! Nulla, id explicabo? Quas beatae assumenda iste facilis.
</ExpText>
