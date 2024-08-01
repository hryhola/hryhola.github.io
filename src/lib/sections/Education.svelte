<script>
    import EducationTile from "$lib/components/education/EducationTile.svelte"

</script>
<section id="education">
    <div class="container">
        <div class="education-academic">
            <EducationTile title="Bachelor's Degree"
                credentialCategory="degree"
                degreeField="Software Engineering"
                image="degree"
                imageAlt="Academic degree"
                publisherType="CollegeOrUniversity"
                publisherName="Lutsk National Technical University"
                period={[2020, 2023]}
                competencyRequired={['Programming', 'Math', 'Databases', 'Engineering']}
                educationalLevel="Bachelor"
            />
            
            <EducationTile title="Associate Degree"
                credentialCategory="degree"
                degreeField="Software Engineering"
                image="degree"
                imageAlt="Academic degree"
                publisherType="CollegeOrUniversity"
                publisherName="Volyn National University College of Food Technology"
                period={[2016, 2020]}
                competencyRequired={['Programming', 'Math', 'Databases', 'Engineering']}
                educationalLevel="Bachelor"
            />

            <EducationTile title="Primary & Secondary Education"
                credentialCategory="degree"
                image="school-degree"
                imageAlt="School degree"
                publisherType="School"
                publisherName="Lutsk Lyceum No. 22"
                published={2016}
                competencyRequired={['Primary education', 'Secondary education', 'High school']}
                educationalLevel="Bachelor"
            />
            <div class="divider"></div>
            <h4 class="education-academic__article-title">What do these academic degrees mean?</h4>
            <p class="education-academic__article-text">To me, nothing</p>
            <p class="education-academic__article-text">There is no value in degrees obtained from corrupt institutions, with apathetic teachers who care more about creating useless documentation to show fake achievements than actually educating students.</p>
            <p class="education-academic__article-text">Everything I've learned has been learned by myself, not taught. <a href="/about-education">Read more...</a></p>
        </div>

        <div class="education-certificates">
            <EducationTile title="JavaScript Frontend Developer"
                credentialCategory="certificate"
                image="wetelo"
                imageAlt="Wetelo Inc logo"
                publisherType="Organization"
                publisherName="Wetelo Inc."
                teacher="Pavlod Serediuk"
                published={2020}
                competencyRequired={['React', 'JavaScript', 'Redux', 'Reselect']}
                educationalLevel='advanced'
            />

            <EducationTile title="Certified B2C Commerce Developer"
                credentialCategory="certificate"
                image="salesforce"
                imageAlt="Salesforce logo"
                publisherType="Organization"
                publisherName="Salesforce"
                published={2022}
                competencyRequired={['SFCC', 'B2C', 'Commerce Cloud', 'ISML', 'Einstein', 'Business Manager']}
                educationalLevel='advanced'
            />

            <EducationTile title="Certified JavaScript Developer"
                credentialCategory="certificate"
                image="salesforce"
                imageAlt="Salesforce logo"
                publisherType="Organization"
                publisherName="Salesforce"
                published={2023}
                competencyRequired={['JavaScript', 'Lightning', 'APEX']}
                educationalLevel='advanced'
            />

            <EducationTile title="Agile Project Management Certification"
                credentialCategory="certificate"
                image="udemy"
                imageAlt="Udemy logo"
                publisherType="Organization"
                publisherName="Udemy"
                teacher="Paul Ashun"
                published={2023}
                competencyRequired={['Agile', 'Scrum', 'Kanban', 'Jira', 'Extreme programming', 'Project management']}
                educationalLevel='advanced'
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

            <EducationTile title="Advanced Agile and Scrum"
                credentialCategory="certificate"
                image="udemy"
                imageAlt="Udemy logo"
                publisherType="Organization"
                publisherName="Udemy"
                teacher="Doug Rose"
                published={2024}
                competencyRequired={['Agile', 'Scrum', 'Kanban', 'Jira', 'Extreme programming', 'Project management']}
                educationalLevel='advanced'
            />

            <EducationTile title="Master Discrete Mathematics"
                credentialCategory="certificate"
                image="udemy"
                imageAlt="Udemy logo"
                publisherType="Organization"
                publisherName="Udemy"
                teacher="Grant Hall"
                published={2024}
                competencyRequired={['Discrete Mathematics', 'Logic', 'Sets', 'Statistics', 'Analysis']}
                educationalLevel='advanced'
            />

            <EducationTile title="Running a Sole Proprietorship"
                credentialCategory="certificate"
                image="cases"
                imageAlt="CASES logo"
                publisherType="Organization"
                publisherName="CASES"
                teacher="Dmytro Palyushchenko"
                published={2024}
                competencyRequired={['Discrete Mathematics', 'Logic', 'Sets', 'Statistics', 'Analysis']}
                educationalLevel='advanced'
            />
        </div>
    </div>
</section>
<style lang="scss">
    @import '../variables.scss';

    #education .container {
        min-height: $min-section-height;
        height: 100%;

        display: flex;
        justify-content: center;
        gap: 60px;
        padding: 30px;

        font-size: 18px;
        font-family: 'Fira Sans', serif;
    }

    .divider {
        height: 1px;
        width: 60%;
        background-color: lightgray;
        align-self: center;
    }

    .education-academic, .education-certificates {
        height: 100%;
        max-width: 35vw;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
    }

    .education-academic {
        &__article-title {
            font-weight: 500;
        }

        &__article-text {
            font-weight: 200;
            line-height: 1.5em;
        }
    }
</style>