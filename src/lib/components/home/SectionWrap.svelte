<script>
    export let number = 1;
</script>
<section>
    <slot name="contentPrimary"></slot>
    <div class="numbers">
        <svg class="line" preserveAspectRatio="none" viewbox="-1 -1 6 800" width="6" height="800">
            <line x="0" y1="0" x2="0" y2="800"></line>
        </svg>
        <div class="number">{number}</div>
    </div>
    <slot name="contentSecondary"></slot>

</section>

<style lang="scss">
    section {
        position: relative;
        height: fit-content;
        max-width: 1000px;
        margin: 0 auto;
        display: grid;
        align-items: center;
        overflow: hidden;
        grid-template-columns: 4em 1fr;
        grid-template-areas: "numbers contentPrimary" "numbers contentSecondary";
        padding: 0;
        .numbers {
            position: relative;
            grid-area: numbers;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: 100%;
            svg {
                height: 100%;
                stroke-width: 4px;
                stroke: $brand2;
                position: absolute;
            }
            .number {
                position: absolute;
                top: 1em;
                width: 100%;
                aspect-ratio: 1 / 1;
                border-radius: 50%;
                background-color: $brand2;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: var(--fs-600);
                font-weight: 900;
                color: #ffffff;
            }
        }
        :global( [slot="contentPrimary"] ) {
            padding: 3vw;
        }
        :global( [slot="contentSecondary"] ) {
            padding: 3vw;
        }
    }
    // MED > SCREENS SECTION LAYOUTS
    @media (min-width:700px) {
        section {
            grid-template-columns: 1fr 4em 1fr;
            grid-template-areas: "left numbers right";
        }
        // Alternate image and text on larger screens
        :global(section:nth-of-type(odd)) {
            :global( [slot="contentPrimary"] ) {
                grid-area: right;
            }
            :global( [slot="contentSecondary"] ) {
                grid-area: left;
            }
        }
    }
</style>