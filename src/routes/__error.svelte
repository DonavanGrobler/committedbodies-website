<script>
    import Header from '$lib/components/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>


<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header>OOPS!</Header>
    <section>
        <h1>Oh dear!</h1>
        <p>Sorry - this page doesn't seem to exist.</p>
        <p>Can we tempt you with a few other pages?</p>
        <ul>
            <li>page</li>
            <li>page</li>
            <li>page</li>
            <li>page</li>
        </ul>
    </section>
</div>

<style lang="scss">
    .pageWrap {
        width: 100vw;
    }
    section {
        padding: $spaceLG;
        margin: $spaceLG;
        @include themewrap0;
    }
</style>