<script>
    import Header from '$lib/components/ui-elements/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>


<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header>SERVICES</Header>
    <section>
        <h3>PLACEHOLDER</h3>
    </section>
</div>



<style lang="scss">
    section {
        // padding: $spaceLG;
        // margin: $spaceLG;
        // @include themewrap0;
        :global(ul) {
            list-style-type: none;
        }
    }
</style>
