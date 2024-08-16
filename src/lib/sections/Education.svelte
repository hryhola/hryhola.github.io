<script>
    import Certificates from "$lib/components/education/Certificates.svelte"
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
            <p class="education-academic__article-text">Everything I've learned has been learned by myself, not taught by someone. <a on:focus={scrollToThis} href="/about-education">Read more...</a></p>
        </div>

        <div class="education-certificates">
            <Certificates />
        </div>
    </div>
</section>
<section id="certificates">
    <div class="container">
        <Certificates />
    </div>
</section>
<style lang="scss">
    @import '../variables.scss';

    #education .container, #certificates .container {
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
        }
    }

    #certificates {
        display: none;

        .container {
            justify-content: space-around;
        }

        @media screen and (max-width: $width-phone-big) {
            display: block;
        }
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

    .education-certificates {
        @media screen and (max-width: $width-phone-big) {
            display: none;
        }
    }
</style>