<!-- ******SCRIPTS -->
<script>
    import homePage from '$lib/data/homePage.json'
    import HeroLogo from "$lib/components/HeroLogo.svelte";
    import JillsStoryIntro from '$lib/components/JillsStoryIntro.svelte';
    import VideoSection from '$lib/components/VideoSection.svelte'
    import NumberedSection from '$lib/components/NumberedSection.svelte';
    import ContactSection from '$lib/components/ContactSection.svelte'

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
<HeroLogo></HeroLogo>

<!-- (Intro) Jill's story -->
<JillsStoryIntro {introData}></JillsStoryIntro>

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