<!-- ******HTML -->
<svelte:head>
	<title>Committed Bodies - Weight-loss gym in Benoni</title>
</svelte:head>

<!-- Hero logo -->
<section class="hero">
    <AnimatedLogo></AnimatedLogo>
</section>

<!-- (Intro) Jill's story -->
<Intro {introSections}></Intro>

<div class="pageWrap">
    <div class="pageContentWrap">

        <!-- Video Preview -->
        <VideoSection {introSections}></VideoSection>

        <!-- Numbered Sections -->
        {#each sections as section (section)}
            <SectionWrap {section}></SectionWrap>
        {/each}

        <!-- Contact -->
        <!-- <ContactSection></ContactSection> -->
    </div>
</div>


<!-- ******STYLES -->
<style lang="scss">
    .hero {
        height: 100%;
        background-image: var(--brandGradient);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2vw 0;
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
</style>

<!-- ******SCRIPTS -->
<script>
    import homePage from '$lib/data/homePage.json'
    import AnimatedLogo from "$lib/svg/logo/Animated-LOGO.svelte";
    import Intro from '$lib/components/home/Intro.svelte';
    import VideoSection from '$lib/components/home/VideoSection.svelte'
    import SectionWrap from '$lib/components/home/SectionWrap.svelte';
    // import ContactSection from '$lib/components/contact/ContactSection.txt';

    // SONYA: if you update the Animated-LOGO from keyshape, replace woman and dumbell xlinks with cloudinary links:
    // xlink:href="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631689403/ui-assets/woman_f4955x.png"
    // xlink:href="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631689417/ui-assets/dumbbell-FG_auovbf.png"

    // SECTIONS FROM DATA
    let sections = homePage.sections;
    let introSections = homePage.intro;
</script>