<script lang="ts">
    import textSource from './random-code.json'
    import { shuffle } from '$lib/scripts/array'

    const text = shuffle(textSource)

    export let animationDelay = 0;
    export let hidden = false
    export let active = false

    type ReplacedText = { type: 'regular', value: string } | { type: 'see', value: [string, string] };

    const getMiddleIndex = (array: string[], index: number) => {
        const middleIndex = Math.floor(array.length / 2)
        const startOfMiddle = Math.max(0, middleIndex - 2)

        return index >= startOfMiddle ? index - startOfMiddle : -1
    }

    function isIndexInMiddleFive(array: string[], index: number) {
        const middleIndex = Math.floor(array.length / 2)
        const startOfMiddle = Math.max(0, middleIndex - 2)
        const endOfMiddle = Math.min(array.length - 1, middleIndex + 2)
        return index >= startOfMiddle && index <= endOfMiddle
    }

    function processMiddleString(input: string, arr: (string | number)[]): ReplacedText[] {
        const middleStart = Math.floor((input.length - 40) / 2);
        const middleEnd = middleStart + 40;
        const middleString = input.slice(middleStart, middleEnd);

        let result: ReplacedText[] = [];

        // Add initial substring before the middle 40 characters
        if (middleStart > 0) {
            result.push({ type: 'regular', value: input.slice(0, middleStart) });
        }

        let currentIndex = 0;

        for (const item of arr) {
            if (typeof item === 'number') {
                const originalPart = middleString.slice(currentIndex, currentIndex + item);
                result.push({ type: 'regular', value: originalPart });
                currentIndex += item;
            } else if (typeof item === 'string') {
                const originalPart = middleString.slice(currentIndex, currentIndex + item.length);
                result.push({ type: 'see', value: [originalPart, item] });
                currentIndex += item.length;
            }
        }

        // Add ending substring after the middle 40 characters
        if (middleEnd < input.length) {
            result.push({ type: 'regular', value: input.slice(middleEnd) });
        }

        return result;
    }
    
    function drawSee(array: string[], index: number): ReplacedText[] {
        const middleIndex = getMiddleIndex(array, index)

        const write = (data: (number|string)[]) => processMiddleString(array[index], data)

        switch (middleIndex) {
            case 0: return write(['SEESEESEESEE',2,'SEESEESEESEE',2,'SEESEESEESEE'])
            case 1: return write(['SEE', 11, 'SEE', 11, 'SEE', 9])
            case 2: return write(['SEESEESEESEE', 2, 'SEESEESEE', 5, 'SEESEESEE', 3])
            case 3: return write([9, 'SEE', 2, 'SEE', 11, 'SEE',  9])
            case 4: return write(['SEESEESEESEE',2,'SEESEESEESEE',2,'SEESEESEESEE'])
            default: throw new Error('Not five!')
        }
    }
</script>

<div style="animation-delay: {animationDelay}s"
    class="code-background"
    class:code-background--active="{active}"
    class:code-background--hidden="{hidden}"
>
    {#each text as line, i}
        <span>
        {#if isIndexInMiddleFive(text, i)}
            {#each drawSee(text, i) as string}
                {#if string.type === 'regular'}
                    {string.value}
                {:else}
                    <span class="see-regular">{string.value[0]}</span><span class="see-hover">{string.value[1]}</span>
                {/if}
            {/each}
        {:else}
            {line}
        {/if}
    </span>
        <br />
    {/each}
</div>

<style lang="scss">
    @import '../../variables.scss';

    .code-background {
        cursor: pointer;
        user-select: none;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        color: gray;
        font-family: 'Fira Code', monospace;
        font-size: 0.75vw;

        opacity: 0;

        animation: preview 14s;
        animation-iteration-count: infinite;
        transition: color 2s, opacity 1s;

        @media screen and (max-width: $width-tablet-big) {
            font-size: 1vw;
        }

        @media screen and (max-width: $height-tablet) {
            font-size: 1.5vw;
        }

        @media screen and (max-width: $height-tablet-small) {
            font-size: 2vw;
        }

        .see-hover {
            display: none;
            font-weight: 900;
        }

        &--active, &:hover {
            animation: none;
            color: lightgray;
            opacity: 1;

            .see-hover {
                display: inline;
                animation: toBlack 3s forwards;
            }

            .see-regular {
                display: none;
            }
        }

        &--hidden {
            display: none!important;
        }
    }

    @keyframes preview {
        0% { opacity: 0; }
        10% { opacity: 1; }
        20% { opacity: 0; }
        100% { opacity: 0; }
    }

    @keyframes toBlack {
        from { color: gray; }
        to { color: black; }
    }
</style>
