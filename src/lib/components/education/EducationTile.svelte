<script lang="ts">
    export let image: string
    export let imageAlt: string
    export let credentialCategory: 'degree' | 'certificate' 
    export let title: string // Degree name or course name
    export let degreeField: string | undefined = undefined // Applicable only for type='degree'
    export let publisherType: 'School' | 'CollegeOrUniversity' | 'Organization' // 'Organization' only for type='course'
    export let publisherName: string // University name or course organization
    export let teacher: string | undefined = undefined // Applicable only for type='degree'
    export let period: [number, number] | undefined = undefined
    export let published: number | undefined = undefined // For type='course' OR for publisherType='School'
    export let yearNewLine = credentialCategory === 'degree'
    export let competencyRequired: string[]
    export let educationalLevel: string
</script>

<div class="edu" itemscope itemtype='https://schema.org/EducationalOccupationalCredential'>
    <div class="edu-image">
        <img src={'pictures/' + image + '.svg'} alt={imageAlt} />
    </div>
    <div class="edu-content">
        <h4>
            <span class="edu-content__title" itemprop="name">{title}</span>{#if degreeField}, <span class="edu-content__degree" itemprop="about">{degreeField}</span>{/if}
        </h4>
        <div class="edu-description">
            <span class="edu-description__publisher" itemscope itemprop="recognizedBy">
                <span itemprop="name" itemscope itemtype={`https://schema.org/${publisherType}`}>
                    <span itemprop="name">
                        {publisherName}
                    </span>
                </span>
            </span>

            {#if teacher}
                (<span itemprop="provider" itemscope itemtype="https://schema.org/Person"><span itemprop="name">{teacher}</span></span>)
            {/if}

            {#if yearNewLine}<br />{:else}, {/if}
        
            <span class="edu-description__year">
                {#if period}
                    {period[0]} - <span itemprop='datePublished'>{period[1]}</span>
                {:else if published}
                    <span itemprop='datePublished'>{published}</span> 
                {/if}
            </span>
        </div>
    </div>
    <div class="edu-microdata">
        {#if degreeField}
            <span itemprop="competencyRequired">{degreeField}</span>
        {/if}
        {#each competencyRequired as competency}
            <span itemprop="competencyRequired">{competency}</span>
        {/each}
        <span itemprop="credentialCategory">{credentialCategory}</span>
        <span itemprop="educationalLevel">{educationalLevel}</span>
    </div>
</div>
<style lang="scss">
    .edu {
        display: flex;
        flex-wrap: nowrap;
    }

    .edu-microdata {
        width: 0;
        height: 0;
        opacity: 0;
        user-select: none;
    }
</style>
