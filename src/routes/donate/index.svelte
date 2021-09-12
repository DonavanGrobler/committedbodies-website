<script>
    import Header from '$lib/components/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>


<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header>DONATE</Header>
    <section class="paper testing">
        <h1>TEMP PAGE</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam optio sapiente repellendus autem excepturi laboriosam nam quas voluptatum aspernatur ipsum quis, ad, at labore molestias odit nisi dolor a! Praesentium!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam optio sapiente repellendus autem excepturi laboriosam nam quas voluptatum aspernatur ipsum quis, ad, at labore molestias odit nisi dolor a! Praesentium!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam optio sapiente repellendus autem excepturi laboriosam nam quas voluptatum aspernatur ipsum quis, ad, at labore molestias odit nisi dolor a! Praesentium!
        </p>
    </section>
</div>



<style lang="scss">
    section {
        padding: $spaceLG;
        margin: $spaceLG;
        @include themewrap0;
        &:hover {
            @include themewrap0-E;
        }
    }
</style>
