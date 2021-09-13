<script>
    export let bgColor;
    export let data;
    console.log(data);
</script>

<section class="{bgColor}">

        <slot name="left">
		</slot>

        <slot name="left">
		</slot>

</section>

<style lang="scss">
    section {
        // SMALL DEVICES
        &:global(div) {
            padding: $spaceMD;
            border: 1px solid red;
        }
        &.light1 {
            background-color: $light1;
        }
        &.light2 {
            background-color: $light2;
        }
        // MED - LARGE SCREENS
        @media (min-width: $md) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: $spaceXL;
        }
    }
</style>