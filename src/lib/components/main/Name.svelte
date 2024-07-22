<h1 itemprop="name">
    <span itemprop="givenName">Vladyslav</span>
    <br />
    <span itemprop="familyName">Hryhola</span>
</h1>
<h2 class="header-normal">
    <span class="typing">
        <span itemprop="jobTitle">Software Engineer</span>.
        <span itemprop="hasOccupation">Private entrepreneur</span>.
    </span>
</h2>
<div class="header-small">
    <h2>
        <span class="typing typing-job">
            <span itemprop="jobTitle">Software Engineer</span>.
        </span>
    </h2>
    <h2>
        <span class="typing typing-occupation">
            <span itemprop="hasOccupation">Private entrepreneur</span>.
        </span>
    </h2>
</div>


<style lang="scss">
    @import '../../variables.scss';

    h1 {
        font-family: "Gloock", serif;
        font-size: 76px;
        font-weight: 400;
        font-style: normal;
        z-index: 1;

        br {
            display: none;
        }

        @media screen and (max-width: $width-tablet) {
            font-size: 10vw;
        }

        @media screen and (max-width: $width-phone) {
            font-size: 20vw;
            br {
                display: block;
            }
        }
    }


    .header-normal {
        display: grid;

        @media screen and (max-width: $width-phone) {
            display: none;
        }
    }

    .header-small {
        display: none;

        @media screen and (max-width: $width-phone) {
            display: block;
        }
    }

    h2 {
        font-family: "Fira Code", monospace;
        font-optical-sizing: auto;
        font-size: 18px;
        font-weight: 200;
        letter-spacing: 0.07em;
        white-space: nowrap;
        z-index: 1;

        display: grid;
        grid-template-columns: min-content;

        @media screen and (max-width: $width-tablet) {
            font-size: $font-size-tablet;
        }

        @media screen and (max-width: $width-phone) {
            font-size: $font-size-phone;
        }
    }

    .typing {
        overflow: hidden;
        letter-spacing: 1px;
        animation: typing 2s steps(40, end) forwards, removeBorder 1s 2s forwards;

        @media screen and (max-width: $width-phone) {
            &-job {
                animation: typing 1s steps(18, end), removeBorder 1s 2s forwards;
            }

            &-occupation {
                width: 0;
                border: none;
    
                animation: typing 1s 1s steps(21, end) forwards, removeBorder 1s 2s forwards;
            }
        }
    }

    @keyframes appear {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes typing {
        from { width: 0; border-right: 1px solid black; }
        to { width: 100%; border-right: 1px solid black; }
    }

    @keyframes removeBorder {
        to { border-color: transparent; }
    }
</style>
