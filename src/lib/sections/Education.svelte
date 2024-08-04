<script>
    import EducationTile from "$lib/components/education/EducationTile.svelte"
    import { scroller } from "$lib/scripts/SectionsScroller";

    const scrollToThis = scroller.createFocusHandler(4)
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
                url="https://photos.google.com/share/AF1QipNVSCEFoFUG5nGBbEz1NeBtR873Q_eZrUWaPmBqKAfj1mpuBB4L74oa0S3C80wgZQ/photo/AF1QipOIodjLSly8r5K1UqbLtW6hX1Rp5-fT_bzvaeP2?key=WHNnWjBxS3U5ZEcyUUJYSlA0bW1IOXpScFJRMVZB"
            />
            
            <EducationTile title="Associate Degree"
                credentialCategory="degree"
                degreeField="Software Engineering"
                image="degree"
                imageAlt="Academic degree"
                publisherType="CollegeOrUniversity"
                publisherName="Volyn Professional College, National University of Food Technologies"
                period={[2016, 2020]}
                competencyRequired={['Programming', 'Math', 'Databases', 'Engineering']}
                educationalLevel="Bachelor"
                url="https://photos.google.com/share/AF1QipNVSCEFoFUG5nGBbEz1NeBtR873Q_eZrUWaPmBqKAfj1mpuBB4L74oa0S3C80wgZQ/photo/AF1QipMKUHqlA0uNnOSQ3_PKozjQcw7xSBC7HAQpnF4f?key=WHNnWjBxS3U5ZEcyUUJYSlA0bW1IOXpScFJRMVZB"
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
            <p class="education-academic__article-text">Everything I've learned has been learned by myself, not taught. <a on:focus={scrollToThis} href="/about-education">Read more...</a></p>
            <div class="divider divider--mobile"></div>
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
                url="https://photos.google.com/share/AF1QipMeYRd8teI9vDFxGRsIsu-IXSh70kVhtT7azGVv9hN7YHF90825fQ39syF7m4D8yw/photo/AF1QipMOIgGPV6oCrnFgjmwsnZ8JOhDdzwwlnBMFWMTz?key=SW1ncWxGX25Ma01XX3I1Mk82MFFqRlJ5NEpIczN3"
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
                url="https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=xcF8ibSz/Z92yxruCTrTe8pb7XdV9Wjr1TIs0M642dLq0vfipM4sHv8TDF3KGtZS"
                identifier="2461245"
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
                url="https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=xcF8ibSz/Z92yxruCTrTe8pb7XdV9Wjr1TIs0M642dLq0vfipM4sHv8TDF3KGtZS"
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
                url="https://www.udemy.com/certificate/UC-24cbfca0-0f6c-4798-b5e9-eca59a3d67f7/"
                identifier="UC-24cbfca0-0f6c-4798-b5e9-eca59a3d67f7"
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
                url="https://www.udemy.com/certificate/UC-422e4961-a0ec-49f4-971a-78ce44ffa59b/"
                identifier="UC-422e4961-a0ec-49f4-971a-78ce44ffa59b"
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
                url="https://www.udemy.com/certificate/UC-9cd02870-86cc-4882-a79e-a3c97f5e5795/"
                identifier="UC-9cd02870-86cc-4882-a79e-a3c97f5e5795"
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
                url="https://www.udemy.com/certificate/UC-7eb0cd99-e6f0-472d-ba63-6c12e1ae421c/"
                identifier="UC-7eb0cd99-e6f0-472d-ba63-6c12e1ae421c"
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
                url="https://cases.media/cert/QD7TBL"
                identifier="QD7TBL"
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
        font-family: 'Fira Sans', sans-serif;

        @media screen and (max-width: $width-tablet-big) {
            gap: 4px;
        }

        @media screen and (max-width: $width-tablet) {
            font-size: 16px;
        }

        @media screen and (max-width: $width-phone-big) {
            font-size: 14px;
            flex-flow: column;
            min-height: calc(200 * var(--vh));
        }
    }

    .divider {
        height: 1px;
        width: 60%;
        background-color: lightgray;
        align-self: center;

        &--mobile {
            display: none;

            @media screen and (max-width: $width-phone-big) {
                display: block;
            }
        }
    }

    .education-academic, .education-certificates {
        height: 100%;
        max-width: 35vw;
        display: flex;
        flex-flow: column;
        justify-content: space-around;

        @media screen and (max-width: $width-tablet-big) {
            max-width: 45vw;
        }

        @media screen and (max-width: $width-phone-big) {
            max-width: 100vw;
        }
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