<script>
    import Logo from '$lib/svg/logo/Logo.svelte';
    export let y;
</script>

<!-- Different logos so that scrolling animation only targets the md screen sizes -->
<!-- TODO: class shoud not be sent to the svg - put a wrapper around the logo and add the class here -->
<div class="logoWrap {y > 80 ? 'scrolled' : ''}">
    <a href="/" alt="Go to home page">
        <Logo myClass="defaultLogo"></Logo>
        <Logo myClass="mdScreenLogo"></Logo>
    </a>
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
        a {
            height: 100%;
            width: auto;
            display: block;
            text-decoration: none;
        }
        :global(svg.mdScreenLogo) {
            display: none;
        }
    }

    // Responsive styles
    @media screen and (min-width: $mdScreen) and (max-width: ($xlScreen - 1)) {
        .logoWrap {
            display: flex;
            background-color: transparent;
            height: 120px;
            transform-origin: left top;
            transition: all 0.5s linear;
            will-change: height;
            :global(svg.defaultLogo) {
                display: none;
            }
            :global(svg.mdScreenLogo) {
                display: block;
            }
            &.scrolled {
                height: 60px;
            }
        }
    }
    @media screen and (min-width: $xlScreen) {
        .logoWrap {
            background-color: transparent;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 10% 10% 5% 10%;
        }
    }

</style>