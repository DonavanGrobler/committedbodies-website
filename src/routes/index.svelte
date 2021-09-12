<script>
    import HeroSlider from "$lib/components/HeroSlider.svelte";
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    import SectionTwoCol from "$lib/components/sections/SectionTwoCol.svelte";
</script>


<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <HeroSlider></HeroSlider>

     <!-- Jill story -->
    <SectionTwoCol bgColor="light1"></SectionTwoCol>

    <!-- Banner -->
    <SectionTwoCol bgColor="light2"></SectionTwoCol>
</div>



<style lang="scss">
</style>
