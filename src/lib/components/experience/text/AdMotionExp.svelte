<script lang="ts">
    import ExpText from "../ExpText.svelte"

    export let mobileOnly = false
    export let desktopOnly = false
    export let onFocus: () => void | undefined
    export let onBlur: () => void | undefined
</script>

<ExpText dataLabel="adMotion-exp" fontSize="small" onFocus={onFocus} onBlur={onBlur} mask interactive mobileOnly={mobileOnly} desktopOnly={desktopOnly}>
    While working at this start-up, my work primarily focused on writing the <strong>frontend for smart contracts</strong> on the Ethereum network using React and Redux as the main tools.
    <br />
    <br />
    Another responsibility I had was creating and maintaining the <strong>wallet-connector</strong> module, which allowed the website to be used with any popular wallet, such as Metamask, Coinbase, Fortmatic, Portis, Squarelink, and others.
    <br />
    <br />
    Additionally, my job occasionally included gathering information on the backend (Node, PHP) based on certain criteria from the blockchain.
</ExpText>
