<script>
    // Global Styles
    import "../styles/app.scss";
    import IconsCombined from "$lib/svg/Icons_combined.svelte";
    import Logo from '$lib/logo/Logo.svelte';
</script>

<!-- Add hidden icon paths to use across all components -->
<IconsCombined></IconsCombined>

<div class="logo">
    <Logo></Logo>
</div>
<nav class="topNav">Top nav here</nav>
<nav class="actionNav">Action Action Action</nav>
<nav class="overlay">Overlay Here</nav>

<!-- Main content -->
<main>
    <slot></slot>
    <footer>
        footer here
    </footer>
</main>