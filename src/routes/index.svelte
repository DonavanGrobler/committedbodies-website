<script>
    import homePage from '$lib/data/homePage.json'
    import AnimatedLogo from "$lib/svg/logo/Animated-LOGO.svelte";
    import JillsStory from '$lib/components/home/JillsStory.svelte';
    import StartsNow from '$lib/components/home/StartsNow.svelte';
    import SectionWrap from '$lib/components/home/SectionWrap.svelte';
    // import ContactSection from '$lib/components/sections/ContactSection.svelte';

    // SONYA: if you update the Animated-LOGO from keyshape, replace woman and dumbell xlinks with cloudinary links:
    // xlink:href="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631689403/ui-assets/woman_f4955x.png"
    // xlink:href="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631689417/ui-assets/dumbbell-FG_auovbf.png"

    // SECTIONS FROM DATA
    let sections = homePage.sections;
</script>

<div class="pageWrap">
    <!-- Intro: Hero logo -->
    <section class="intro">
        <AnimatedLogo></AnimatedLogo>
    </section>

    <!-- Page Content -->
    <div class="pageContentWrap">
        <!-- Jill's story -->
        <!-- <JillsStory></JillsStory> -->

        <!-- Starts now -->
        <!-- <StartsNow></StartsNow> -->

        <!-- Numbered Sections -->
        {#each sections as section (section)}
            <SectionWrap {section}></SectionWrap>
        {/each}

        <!-- Contact -->
        <!-- <ContactSection></ContactSection> -->
    </div>
</div>



<style lang="scss">
    .pageWrap {
        // Intro: Hero logo
        .intro {
            height: 100%;
            background-image: $brandGradient;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            :global(svg){
                height: 100%;
                width: auto;
                max-width: 100%;
                overflow: visible; /* This prevents clipping when animating the expanding/enlarging */
                box-shadow : 0px -0px 10000px transparent; /*overflow trick for chrome - to do the same as above*/
            }
            @media screen and (min-width: $mdScreen) and (max-width: $xlScreen){
                padding-top: 136px;
            }
        }
        // .pageContentWrap {
        //     section {
        //         margin: 4wv;
        //         padding: 4vw;
        //     }
        // }

    }
</style>