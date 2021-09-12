<script>
    export let bgColor;
</script>

<section class="{bgColor}">
    <div>
        <p>LEFT COL</p>
    </div>
    <div>
        <p>RIGHT COL</p>
    </div>
</section>

<style lang="scss">
    section {
        // SMALL DEVICES
        div {
            padding: $spaceMD;
            border: 1px solid red;
            p {
                height: 300px;
            }
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