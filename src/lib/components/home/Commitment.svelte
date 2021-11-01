<script>
    import SectionWrap from "./SectionWrap.svelte";
    export let number;
</script>

<SectionWrap number={number}>
    <div slot="contentPrimary">
        <h2>Make a character commitment</h2>
        <h3 class="subtitle">- not a will-power comittment</h3>
        <p>
            Willpower plays a much smaller role than we think. Actually, character trumps will-power when it comes to body transformation. You can create rules which define the type of person you want to be - go ahead and try it.
        </p>
        <p>
            Look yourself in the mirror and say, "I'm the type of person who enjoys a healthy, active life." You're creating a character rule - these affirmations are more effective and use less psychological energy than trying to resist short-term temptation.
        </p>
    </div>
    <div slot="contentSecondary">
        <img src="/assets/images/kettlebell-LOGO.png" alt="">
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

<!--
    RESOURCES
    https://www.psychologytoday.com/us/blog/never-binge-again/201812/in-weight-loss-character-trumps-willpower
 -->