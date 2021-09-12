<script>
    import Header from '$lib/components/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    export let thumbnail;
    export let title;
</script>


<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header>{title}</Header>
    <section>
        <img class="featured-image" src="{thumbnail}" alt="thumbnail description" />
        <div class="content">
            <slot />
        </div>
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