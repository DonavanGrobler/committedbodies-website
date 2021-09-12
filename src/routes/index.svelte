<script>
    import HeroSlider from "$lib/components/HeroSlider.svelte";
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    import README from '../../README.md'
</script>


<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <HeroSlider></HeroSlider>
    <section>
        <README></README>
    </section>
</div>



<style lang="scss">
    section {
        padding: $spaceLG;
        margin: $spaceLG;
        @include themewrap0;
        :global(ul) {
            list-style-type: none;
        }
    }
</style>
