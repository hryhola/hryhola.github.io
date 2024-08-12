<script lang="ts">
    import ExpText from "../ExpText.svelte"

    export let mobileOnly = false
    export let desktopOnly = false
    export let onFocus: () => void | undefined
    export let onBlur: () => void | undefined
</script>

<ExpText dataLabel="student-exp" fontSize="small" onFocus={onFocus} onBlur={onBlur} mask interactive mobileOnly={mobileOnly} desktopOnly={desktopOnly}>
    At college, my associate’s diploma project was based on the implementation of a <strong>serverless freelancer platform</strong> using React, Redux, and Firebase.
    <br />
    <br />
    At university, my bachelor's diploma project focused on creating and deploying a <strong>platform for real-time, multiplayer interactive activities</strong> utilizing Next.js and uWebSockets.
</ExpText>
