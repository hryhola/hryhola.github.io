<script>
    import Title from "$lib/components/what-do-I-do/Title.svelte"
    import { isLightBulbHover  } from "$lib/scripts/context";

    // const letBeLight = () => isLightBulbHover.set(true)
    // const letBeDark = () => isLightBulbHover.set(false)
</script>
<section id="what-do-I-do">
    <div class="container">
        <div class="dude-wrapper">
            <img src="pictures/Dude_Standing.png" alt="Dude" />
        </div>

        <article>
            <h3>
                <Title text="Solve problems" />
                <span class="light-rays-wrapper" >
                    <span class="light-rays">
                        <img
                            height="60"
                            src="pictures/light_bulb.png"
                            alt="light bulb"
                        />
                    </span>
                </span>
            </h3>

            <p>That’s job of an <strong>engineer</strong>.</p>
            <p>I seek for issues that should be <strong>fixed</strong>.</p>
            <p>
                Fixed using: languages - formal and human, frameworks, platforms
                and most importantly <strong>analytical thinking</strong>.
            </p>
            <p>Fixed to improve the world I live in.</p>
        </article>
    </div>
</section>

<style lang="scss">
    #what-do-I-do {
        background: black;
        color: white;
        font-family: 'Fira Code', monospace;
        overflow: hidden;

        .container {
            display: flex;
            height: 100%;
        }
    
        .dude-wrapper {
            img {
                position: relative;
                z-index: 2;
                filter: saturate(0);
            }
        }

        article {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 50%;
            padding: 70px;

            &:hover .light-rays{
                width: 1800px;
                height: 1800px;
                transform: translate(-48%, -48%);

                img {
                    filter: saturate(0) contrast(2)
                }
            }

        }

        h3 {
            position: relative;
            white-space: nowrap;
        }

        .light-rays {
            z-index: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            width: 0px;
            height: 0px;
        
            transform: translate(-48%, -48%);
        
            background: radial-gradient(
                    circle,
                    white 0%,
                    rgba(255, 255, 255, 0) 75%
                );

            transition: 1s;

            img {
                filter: invert(1) saturate(0);
                user-select: none;
            }

            &-wrapper {
                position: absolute;
                z-index: 0;
            }
        }

        p {
            z-index: 1;
            font-size: 18px;

            &:nth-of-type(1) {
                text-shadow: -4px 3px 4px black;
            }
            &:nth-of-type(2) {
                text-shadow: -9px 6px 6px black;
            }
            &:nth-of-type(3) {
                text-shadow: -15px 10px 10px black;
            }
        
            &:nth-of-type(4) {
                text-shadow: -18px 14px 16px black;
            }
        }
    }
</style>
