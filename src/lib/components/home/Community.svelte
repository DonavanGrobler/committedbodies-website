<script>
    import SectionWrap from "./SectionWrap.svelte";
</script>

<SectionWrap number="5">
    <div slot="contentPrimary">
        <h2>Make it fun!</h2>
        <p>Become part of a supportive community. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim tempore tenetur molestiae ipsa quasi eveniet ea consequatur commodi. Quas aut excepturi repellat expedita, dignissimos voluptate error ipsum iusto sapiente?</p>
    </div>
    <div slot="contentSecondary">
        images here
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