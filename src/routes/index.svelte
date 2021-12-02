<!-- ******HTML -->
<svelte:head>
	<title>Committed Bodies - Weight-loss gym in Benoni</title>
</svelte:head>

<!-- Hero logo -->
<AnimatedLogo></AnimatedLogo>

<!-- (Intro) Jill's story -->
<Intro {introSections}></Intro>

<div class="pageWrap">
    <div class="pageContentWrap">

        <!-- Video Preview -->
        <VideoSection {videoData}></VideoSection>

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
    
</style>

<!-- ******SCRIPTS -->
<script>
    import homePage from '$lib/data/homePage.json'
    import AnimatedLogo from "$lib/components/home/AnimatedLogo.svelte";
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
    let videoData = homePage.video;
</script>