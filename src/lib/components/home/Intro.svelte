<!-- ******HTML -->

<section class="introTitle">
	<h1 class="xxxl">{intro.title}</h1>
	<p class="subtitle h2">{intro.subtitle}</p>
</section>

<section class="introBefore">
	<div class="graphicsWrap">
		<img class="layer beforeLayerBG" src="/assets/images/BEFORE/beforeBG.png" alt="">
		<img class="layer beforeLayerMirror" src="/assets/images/BEFORE/beforeMirror.png" alt="">
		<img class="layer beforeLayerScale" src="/assets/images/BEFORE/beforeScale.png" alt="">
		<img class="layer beforeLayerJill" src="/assets/images/BEFORE/beforeJill.png" alt="">
	</div>
	
	<div class="content">
		{@html intro.text}
	</div>
</section>

<section class="introAfter">
	<img class="imgAfter" src="{intro.imageAfter}" alt="Jill Myburgh in a bikini on stage looking like a super-model after her weight-loss">
</section>

<!-- ******CSS -->
<style lang="scss">
	section.introTitle {
		padding: 3vw;
		h1 {
			margin: 0;
			color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
			text-align: center;
			font-family: $font_boldEmphasis;
		}
		.subtitle {
			color: hsl(var(--onNeutral) / var(--onNeutralStrength2));
			margin: 0.5em 0;
			text-align: center;
			font-family: $font_cursiveEmphasis;
		}
	}
	section.introBefore {
		position: relative;
		overflow: hidden;
		// min-height: 100%;
		// height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 2rem 1fr;
		
		.graphicsWrap {
			// border: 1px solid red;
			position: relative;
			display: flex;
			justify-content: flex-start;
			align-items: flex-end;
			grid-column: 1 / span 2;
			grid-row: 1;
			.layer {
				position: relative;
				width: 100%;
				height: auto;
				
				&.beforeLayerBG, &.beforeLayerMirror, &.beforeLayerScale {
					position: absolute;
				}
			}
		}
		
		.content {
			border: 1px solid red;
			padding: 3vw;
			color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			grid-column: 2 / span 2;
			grid-row: 1;
			z-index: 2;
			:global(p) {
				margin: 0;
			}			
		}
		:global(.signature) {
			color: hsl(var(--accentHS) var(--accentL));
			font-family: $font_cursiveEmphasis;
			font-size: var(--fontSizeH3);
			margin: 0;
		}
	}
	section.introAfter {
		background-color: transparent;
		z-index: -1;
	}
</style>

<!-- ******SCRIPT -->
<script>
	import { onMount } from 'svelte';
	export let introSections;
	let intro = introSections[0];
	
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tl1 = gsap.timeline({
			scrollTrigger: {
				scroller: "main",
				trigger: '.introBefore',
				anticipatePin: 1,
				scrub: 1,
				start: "top 70%",
				end: "bottom top",
				pinSpacing: false
			}
		});
		tl1.from(".beforeLayerBG",{duration:1, rotate:40},"<");
		tl1.from(".beforeLayerMirror",{duration:1, xPercent:-10},"<+0.1");
		tl1.from(".beforeLayerScale",{duration:1, rotate:20, xPercent:-10},"<+0.1");
		
		let tl2 = gsap.timeline({
			scrollTrigger: {
				scroller: "main",
				trigger: '.introBefore .content',
				endTrigger: '.introAfter',
				start: "center center",
				end: "bottom bottom",
				pin: true,
				pinSpacing: false,
				anticipatePin: 1,
				scrub: 1
			}
		});
	});
</script>