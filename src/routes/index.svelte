<!-- ******SCRIPTS -->
<script>
    import homePage from '$lib/data/homePage.json'
    import AnimatedLogo from "$lib/components/home/AnimatedLogo.svelte";
    import Intro from '$lib/components/home/Intro.svelte';
    import VideoSection from '$lib/components/home/VideoSection.svelte'
    import NumberedSection from '$lib/components/home/NumberedSection.svelte';
    import ContactSection from '$lib/components/contact/ContactSection.svelte'

    // SONYA: if you update the Animated-LOGO from keyshape, replace woman and dumbell xlinks with cloudinary links:
    // xlink:href="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631689403/ui-assets/woman_f4955x.png"
    // xlink:href="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631689417/ui-assets/dumbbell-FG_auovbf.png"

    // SECTIONS FROM DATA
    let sections = homePage.sections;
    let introData = homePage.intro;
    let videoData = homePage.video;
</script>

<!-- ******HTML -->
<svelte:head>
	<title>Committed Bodies - Weight-loss gym in Benoni</title>
</svelte:head>

<!-- Hero logo -->
<AnimatedLogo></AnimatedLogo>

<!-- (Intro) Jill's story -->
<Intro {introData}></Intro>

<div class="pageWrap">
    <div class="pageContentWrap">

        <!-- Video Preview -->
        <VideoSection {videoData}></VideoSection>

        <!-- Numbered Sections -->
        {#each sections as section (section)}
            <NumberedSection {section}></NumberedSection>
        {/each}

        <!-- Contact -->
        <ContactSection />
    </div>
</div>

<style  lang="scss">
    :global(.pageContentWrap section:nth-last-child(2) .contentSecondary) {
		margin-bottom: 9rem;
	}
</style>