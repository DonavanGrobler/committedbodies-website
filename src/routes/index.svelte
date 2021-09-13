<script>
    import Header from "$lib/components/Header.svelte";
    import homeSections from "$lib/data/home.json";
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    import SectionTwoCol from "$lib/components/sections/SectionTwoCol.svelte";
    // console.log(homeSections);
</script>


<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header>HERO SECTION HERE</Header>
     <!-- Jill story -->
    <SectionTwoCol bgColor="light1" data={homeSections.sections[0]}>
        <div slot="left">
            Left column content
        </div>
        <div slot="right">
            Left column content
        </div>
    </SectionTwoCol>

    <!-- Banner -->
    <SectionTwoCol bgColor="light2">

    </SectionTwoCol>
</div>



<style lang="scss">
</style>
