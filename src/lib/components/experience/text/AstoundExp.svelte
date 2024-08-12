<script lang="ts">
    import ExpText from "../ExpText.svelte"

    export let mobileOnly = false
    export let desktopOnly = false
    export let onFocus: () => void | undefined
    export let onBlur: () => void | undefined
</script>

<ExpText dataLabel="astound-exp" fontSize="small" onFocus={onFocus} onBlur={onBlur} mask interactive mobileOnly={mobileOnly} desktopOnly={desktopOnly}>
    I participated in two major projects while working at Astound.
    <br/>
    <br/>
    The first one was <strong>Launch360</strong>.
    This is the starting point for any new B2C project in the company, referred to as 'the boilerplate.'
    On the frontend, we used a custom Vue-like framework, which I worked extensively with — mostly extending component logic and upgrading accessibility.
    On the backend, we used Commerce Cloud script, which runs on the Rhino engine in the Salesforce context for orders, customers, and product management.
    A significant portion of the work involved handling transactions from CyberSource, Adyen, Klarna, ApplePay, and others.
    <br/>
    <br/>
    The second project was <strong>Dsquared2</strong>.
    As the sole backend developer for an extended period, I primarily worked on integrating different services like Service Cloud, Marketing Cloud, Apple Login, Google (Login, Analytics, Maps), TagCommander, and warehouse accounting.
    Naturally, some of the work also included frontend tasks, such as creating or extending components.
</ExpText>
