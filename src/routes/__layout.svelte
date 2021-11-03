<script>
    import "../styles/app.scss";
    import { browser } from '$app/env'
    import IconsCombined from "$lib/svg/icons/Icons_combined.svelte";
    import TopNav from "$lib/components/navigation/TopNav.svelte";
    import ActionNav from "$lib/components/navigation/ActionNav.svelte";
    import Overlay from "$lib/components/navigation/Overlay.svelte";
    import LogoWrap from "$lib/components/navigation/logoWrap.svelte";
    export let y;
    // $: if (browser) {
    //        if (y > 100) {
    //            document.body.classList.add('scrolled');
    //        } else {
    //         document.body.classList.remove('scrolled');
    //        }
    // };
</script>

<!-- Add hidden icon paths to use across all components -->
<IconsCombined></IconsCombined>

<!-- Navigation Components -->
<LogoWrap y="{y}"></LogoWrap>
<TopNav y="{y}"></TopNav>
<ActionNav></ActionNav>
<Overlay></Overlay>

<div class="navColor {y > 100 ? 'scrolled' : ''}"></div>
<div class="shadow {y > 100 ? 'scrolled' : ''}"></div>

<!-- Main content -->
<main on:scroll="{(e)=>y=e.target.scrollTop}">
    <slot></slot>
    <footer>
        footer here
    </footer>
</main>

<style lang="scss">
    //  Little hack to make a background color for topnav on scroll
    .navColor {
        display: none;
        @media screen and (min-width: $mdScreen) and (max-width: $xlScreen) {
            display: block;
            z-index: 2;
            grid-column: 1 / span 3 ;
            grid-row: 1;
            opacity:0;
            background-color: $brand1;
            transition: all 0.5s linear;
            &.scrolled {
                opacity: 1;
            }
        }
    }

    // Little hack to make a shadow nav elements.
    .shadow {
        z-index: 20;
        pointer-events: none;
        width: 100%;
        height: 100%;
        grid-area: main;
        box-shadow: inset 0 -1px 2px rgba(0, 0, 0, 0.15), inset 0 2px 3px rgba(0, 0, 0, 0.15);

        @media screen and (min-width: $mdScreen) and (max-width: $xlScreen) {
            grid-column: 1 / span 3 ;
            grid-row: 1;
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0);
            transition: all 0.5s linear;
            &.scrolled {
                box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
            }
        }
        @media screen and (min-width: $xlScreen) {
            grid-area: main;
            box-shadow: inset 2px 0 3px rgba(0, 0, 0, 0.15);
        }
    }
</style>