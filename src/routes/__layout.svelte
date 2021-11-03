<script>
    // Global Styles
    import "../styles/app.scss";
    import IconsCombined from "$lib/svg/icons/Icons_combined.svelte";
    import TopNav from "$lib/components/navigation/TopNav.svelte";
    import ActionNav from "$lib/components/navigation/ActionNav.svelte";
    import Overlay from "$lib/components/navigation/Overlay.svelte";
    import LogoWrap from "$lib/components/navigation/logoWrap.svelte";
</script>

<!-- Add hidden icon paths to use across all components -->
<IconsCombined></IconsCombined>

<!-- Navigation Components -->
<LogoWrap></LogoWrap>
<TopNav></TopNav>
<ActionNav></ActionNav>
<Overlay></Overlay>



<!-- Main content -->
<main>
    <slot></slot>
    <footer>
        footer here
    </footer>
</main>