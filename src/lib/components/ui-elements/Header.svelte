<script>
    import BreadCrumbs from "../navigation/BreadCrumbs.svelte";
</script>


<header>
    <div class="titleWrap">
        <h1 class="titleLarge">
            <slot />
        </h1>
        <BreadCrumbs classList="theme-on-primary"></BreadCrumbs>
    </div>
</header>

<style lang="scss">
    header {
        padding-top: 200px;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: var(--brandGradient);
        .titleWrap {
            padding-bottom: 120px;
            z-index: 3;
            color: var(--theme-on-primary);
            h1 {
                color: var(--theme-on-primary);
                font-family: $font_boldEmphasis;
                font-weight: 900;
                font-style: normal;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 0px;
                text-align: center;
                padding: 0;
                margin: 0;
            }
        }

    }
</style>