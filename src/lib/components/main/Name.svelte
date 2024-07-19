<h1 itemprop="name">
    <span itemprop="givenName">Vladyslav</span>
    <br />
    <span itemprop="familyName">Hryhola</span>
</h1>
<h2>
    <span class="typing">
        <span class="typing"><span itemprop="jobTitle">Software Engineer</span>.</span>
        <br />
        <span class="typing"><span itemprop="hasOccupation">Private entrepreneur</span>.</span>
    </span>
</h2>

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

        br {
            display: none;
        }

        @media screen and (max-width: $width-tablet) {
            font-size: $font-size-tablet;
        }

        @media screen and (max-width: $width-phone) {
            font-size: $font-size-phone;
            br {
                display: block;
            }
        }
    }

    .typing {
        overflow: hidden;
        border-right: 1px solid black;
        letter-spacing: 1px;
        animation: typing 2s steps(40, end), removeBorder 1s 2s forwards;

        @media screen and (min-width: $width-phone) {
            & & {
                animation: none;
                border-right: none;
            }
        }
    
        @media screen and (max-width: $width-phone) {
            animation: typing 2s steps(21, end), removeBorder 1s 2s forwards;

            & & {
                border-right: none;
            }
        }
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100%; }
    }

    @keyframes removeBorder {
        to { border-color: transparent; }
    }
</style>
