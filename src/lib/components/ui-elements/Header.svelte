<script>
    import BreadCrumbs from "../navigation/BreadCrumbs.svelte";
</script>


<header>
    <div class="titleWrap">
        <h1 class="titleLarge">
            <slot />
        </h1>
        <BreadCrumbs></BreadCrumbs>
    </div>
</header>

<style lang="scss">
    header {
        padding-top: 120px;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: $brandGradient;
        .titleWrap {
            padding-bottom: $space4;
            z-index: 3;
            color: $fontColorLight1;
            h1 {
                color: $fontColorLight3;
                font-family: $font_boldEmphasis;
                font-weight: 700;
                font-style: normal;
                line-height: 0.9301em;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 0px;
                padding: 0;
                margin: 0;
            }
        }

    }
</style>