<script>
    export let section;
</script>
<section class="background2">
	<!-- <slot name="contentPrimary"></slot> -->
	<div class="contentPrimary">
		<h2>{section.title}</h2>
		<p class="subtitle h4">{section.subtitle}</p>
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
		max-width: 70em;
    	margin: 0 auto;
		display: grid;
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
				font-size: 3em;
				position: absolute;
				top: 1em;
				width: 100%;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
				background-color: $brand2;
				display: flex;
				justify-content: center;
				align-items: center;
				font-weight: 900;
				color: #ffffff;
			}
		}
		.contentPrimary {
			padding: 3vw;
			h2 {
				font-family: $font_boldEmphasis;
				line-height: 1;
				color: #000000;
			}
			.subtitle {
				font-family: $font_cursiveEmphasis;
				margin-top: 1em;
			}
			.actionRow {
				display: flex;
				grid-gap: 1rem;
				.button {
					@include button;
					font-size: 1.2em;
					&.primary {
						@include buttonPrimary;
					}
					&.ghost {
						@include buttonGhost;
						border-color: var(--theme-accent);
						color: var(--theme-on-background2);
					}
				}
			}
		}
		.contentSecondary {
			padding: 3vw;
		}
	}

	// MED > SCREENS SECTION LAYOUTS
	@media screen and (min-width: $mdScreen) {
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