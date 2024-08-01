<script>
    import EducationTile from "$lib/components/education/EducationTile.svelte"

</script>
<section id="education">
    <div class="container">
        <EducationTile title="Bachelor's Degree"
            credentialCategory="degree"
            degreeField="Software Engineering"
            image="degree"
            imageAlt="Bachelor's Degree"
            publisherType="CollegeOrUniversity"
            publisherName="Lutsk National Technical University"
            period={[2020, 2023]}
            competencyRequired={['Programming', 'Math', 'Databases', 'Engineering']}
            educationalLevel="Bachelor"
        />
    
        <EducationTile title="Vue - The Complete Guide"
            credentialCategory="certificate"
            image="udemy"
            imageAlt="Udemy logo"
            publisherType="Organization"
            publisherName="Udemy"
            teacher="Maximilian Schwarzmüller"
            published={2024}
            competencyRequired={['Vue', 'JavaScript', 'Composition API', 'Router']}
            educationalLevel='advanced'
        />
    </div>
</section>
<style lang="scss">
    @import '../variables.scss';

    #education .container {
        min-height: $min-section-height;
        padding: 30px;
    }
</style>