<script>
    import Logo from '$lib/svg/logo/Logo.svelte';
    export let y;
</script>

<div class="logoWrap {y > 100 ? 'scrolled' : ''}">
    <Logo myClass="defaultLogo"></Logo>
    <Logo myClass="mdScreenLogo"></Logo>
</div>

<style lang="scss">
    // Default mobile-first styles
    .logoWrap {
        padding: $space1;
        background-color: $brand1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        :global(svg) {
            height: 100%;
            max-height: 100%;
            max-width: 100%;
        }
        :global(svg.mdScreenLogo) {
            display: none;
        }
    }

    // Responsive styles
    @media screen and (min-width: $mdScreen) and (max-width: $xlScreen) {
        .logoWrap {
            display: flex;
            background-color: transparent;
            :global(svg.defaultLogo) {
                display: none;
            }
            :global(svg.mdScreenLogo) {
                display: block;
                height: 120px;
                transform-origin: left top;
                transition: all 0.5s linear;
                will-change: height;
            }
            &.scrolled {
                :global(svg.mdScreenLogo) {
                    height: 60px;
                }

            }
        }
    }
    @media screen and (min-width: $xlScreen) {
        .logoWrap {
            display: flex;
            max-height: 200px;
            justify-content: center;
            align-items: center;
        }
    }

</style>