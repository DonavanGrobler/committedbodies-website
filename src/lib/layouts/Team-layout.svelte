<script>
    export let thumbnail;
    export let name;
</script>

<div>
    <div>
        <img class="featured-image" src="{thumbnail}" alt="thumbnail description" />
    </div>
    <div class="content">
        <h1>
            {name}
        </h1>
        <slot />
    </div>
</div>

<style lang="scss">
</style>