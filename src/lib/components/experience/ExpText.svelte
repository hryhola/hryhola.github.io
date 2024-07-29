<script lang="ts">
    export let position: string | undefined = undefined
    export let where: string | undefined = undefined
    export let fontSize: 'small' | 'normal' = 'normal'
    export let noAt = false
</script>
<div class="experience-text" class:experience-text--small={fontSize === 'small'}>
    <slot />
    {#if position}
        <span class="experience-text__position">{position}</span>
    {/if}
    {#if where}
        <span class="experience-text__at" class:experience-text__at--no-at={noAt}>{noAt ? ',' : 'at'}</span>
    {/if}
    {#if where}
        <span class="experience-text__where" class:experience-text__where--no-at={noAt}>{where}</span>
    {/if}
</div>
<style lang="scss">
    .experience-text {
        padding: 10px;

        font-size: 21px;
        font-weight: 300;

        &--small {
            font-size: 14px;
            font-weight: 200;
        }

        &__position {
            font-weight: 400;
        }

        &__at {
            font-weight: 100;
            
            &--no-at {
                position: relative;
                left: -4px;
            }
        }

        &__where {
            font-weight: 200;
            font-style: italic;

            &--no-at {
                position: relative;
                left: -4px;
            }
        }
    }
</style>
