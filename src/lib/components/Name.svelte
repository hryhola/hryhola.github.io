<h1 itemprop="name">
    <span itemprop="givenName">Vladyslav</span>
    <span itemprop="familyName">Hryhola</span>
</h1>
<h2>
    <span class="typing">
        <span itemprop="jobTitle">Software Engineer</span>.
        <span itemprop="hasOccupation">Private entrepreneur</span>.
    </span>
</h2>

<style>
    h1 {
        font-family: "Gloock", serif;
        font-size: 86px;
        font-weight: 400;
        font-style: normal;
        z-index: 1;
    }

    h2 {
        font-family: "Fira Code", monospace;
        font-optical-sizing: auto;
        font-size: 26px;
        font-weight: 200;
        z-index: 1;

        display: grid;
        grid-template-columns: min-content;
    }

    .typing {
        overflow: hidden;
        border-right: 0.07em solid black;
        letter-spacing: 0.07em;
        white-space: nowrap;
        animation:  typing 2s steps(40, end), removeBorder 1s 2s forwards;
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100%; }
    }

    @keyframes removeBorder {
        to { border-color: transparent; }
    }
</style>
