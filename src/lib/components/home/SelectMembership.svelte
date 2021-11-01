<script>
    import SectionWrap from "./SectionWrap.svelte";
    export let number;
</script>

<SectionWrap number={number}>
    <div slot="contentPrimary">
        <h2>Put some skin in the game</h2>
        <h3 class="subtitle">- select a membership</h3>
        <p>A gym membership gets you more than access to free weights and treadmills. With a gym membership, you can feel your body and mind transform with every visit.</p>
        <a class="button" href="/membership">Membership</a>
    </div>
    <div slot="contentSecondary">
        <img src="/assets/images/boxing-LOGO.png" alt="">
    </div>
</SectionWrap>

<style lang="scss">
    h2 {
        font-family: $font_boldEmphasis;
        font-size: var(--fs-600);
        line-height: 1;
        margin: 0;
        color: #000000;
    }
</style>