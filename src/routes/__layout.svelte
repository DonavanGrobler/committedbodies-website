<script>
    // Global Styles
    import "../styles/app.scss";
    import Nav from '$lib/components/navigation/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import IconsCombined from "$lib/svg/Icons_combined.svelte";
</script>

<!-- Add hidden icon paths to use across all components -->
<IconsCombined></IconsCombined>

<!-- Fancy Navigation -->
<Nav></Nav>

<!-- Main content -->
<main>
    <div class="content">
        <slot></slot>
    </div>

    <!-- Footer -->
    <Footer></Footer>
</main>



<style lang="scss">
    main {
        position: relative;
        display: grid;
        position: relative;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        width: 100vw;
        height: 100vh;
        .content {
            position: relative;
            grid-column: 1;
            grid-row: 1;
        }
    }
</style>