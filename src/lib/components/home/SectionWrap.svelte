<script>
    export let section;
</script>
<section>
    <!-- <slot name="contentPrimary"></slot> -->
    <div class="contentPrimary">
        <h2>{section.title}</h2>
        <h3 class="subtitle">{section.subtitle}</h3>
        {@html section.text}
        <div class="actionRow">
            {#if section.secondaryButtonText}
                <a class="buttonSecondary" href="{section.secondaryButtonLink}">{section.secondaryButtonText}</a>
            {/if}
            {#if section.primaryButtonText}
                <a class="buttonPrimary" href="{section.primaryButtonLink}">{section.primaryButtonText}</a>
            {/if}
        </div>
    </div>
    <div class="numbers">
        <svg class="line" preserveAspectRatio="none" viewbox="-1 -1 6 800" width="6" height="800">
            <line x="0" y1="0" x2="0" y2="800"></line>
        </svg>
        <div class="number">{section.number}</div>
    </div>
    <div class="contentSecondary">
        <img src="{section.image}" alt="">
    </div>

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
                // font-size: var(--fs-600);
                font-weight: 900;
                color: #ffffff;
            }
        }
        .contentPrimary {
            padding: 3vw;
            h2 {
                font-family: $font_boldEmphasis;
                // font-size: var(--fs-600);
                line-height: 1;
                margin: 0;
                color: #000000;
            }
            h3 {
                font-family: $font_cursiveEmphasis;
            }
            .actionRow {
                display: grid;
                grid-gap: 1rem;
            }
            .buttonPrimary {
                @include buttonPrimary;
            }
            .buttonSecondary {
                @include buttonSecondary;
            }
        }
        .contentSecondary {
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
            .contentPrimary {
                grid-area: right;
            }
            .contentSecondary {
                grid-area: left;
            }
        }
    }
</style>