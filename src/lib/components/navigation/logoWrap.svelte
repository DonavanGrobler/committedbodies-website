<script>
    import Logo from '$lib/svg/logo/Logo.svelte';
</script>

<div class="logoWrap">
    <Logo></Logo>
</div>

<style lang="scss">
    .logoWrap {
        background-color: $brand1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        :global(svg) {
            height: 100%;
            max-height: 100%;
            max-width: 100%;
        }
    }
</style>