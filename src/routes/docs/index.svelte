<script>
    import Header from '$lib/components/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    import README from '../../../README.md'
</script>


<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header>DOCS</Header>
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
