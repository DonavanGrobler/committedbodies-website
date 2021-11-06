<script>
    export let section;
</script>
<section class="background2">
    <!-- <slot name="contentPrimary"></slot> -->
    <div class="contentPrimary">
        <h2>{section.title}</h2>
        <p class="subtitle">{section.subtitle}</p>
        {@html section.text}
        <div class="actionRow">
            {#if section.secondaryButtonText}
                <a class="button ghost" href="{section.secondaryButtonLink}">{section.secondaryButtonText}</a>
            {/if}
            {#if section.primaryButtonText}
                <a class="button primary" href="{section.primaryButtonLink}">{section.primaryButtonText}</a>
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
       display: grid;
       grid-template-columns: 2fr 1fr;
       padding: 3vw;
       .numbers {
           position: absolute;
       }
       .contentPrimary {
           grid-column: 1;
           grid-row: 1;
            .actionRow {
                display: flex;
                .button {
                    font-size: 1.3em;
                    @include button;
                    &.primary {
                        @include buttonPrimary;
                    }
                    &.ghost {
                        @include buttonGhost;
                        border-color: var(--theme-accent);
                    }
                }
           }
       }
       .contentSecondary {
            grid-column: 2;
            grid-row: 1;
       }
       &:global(:nth-of-type(even)) {
            grid-template-columns: 1fr 2fr;
            .contentPrimary {
                grid-column: 2;
                grid-row: 1;
            }
            .contentSecondary {
                grid-column: 1;
                grid-row: 1;
            }
        }
   }
</style>