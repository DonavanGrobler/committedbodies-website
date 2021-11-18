<!-- ******HTML -->
<section class="intro">
	<img class="layer beforeLayer1" src="/assets/images/BEFORE/beforeBG.png" alt="">
	<img class="layer beforeLayer4" src="/assets/images/BEFORE/beforeMirror.png" alt="">
	<img class="layer beforeLayer3" src="/assets/images/BEFORE/beforeScale.png" alt="">
	<img class="layer beforeLayer2" src="/assets/images/BEFORE/beforeJill.png" alt="">
	
	
	<!-- 
		<div class="contentPrimary">
		<h1>{intro.title}</h1>
		<p class="subtitle h2">
			{intro.subtitle}
		</p>
		{@html intro.text}
		</div>
		<img class="imgAfter" src="{intro.imageAfter}" alt="Jill Myburgh in a bikini on stage looking like a super-model after her weight-loss"> -->
</section>

<!-- ******CSS -->
<style lang="scss">
	section.intro {
		position: relative;
		min-height: 100%;
		width: 100%;
		max-width: unset;
		border: 1px solid red;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		.layer {
			position: absolute;
			max-width: unset;
		}
		:global(.signature) {
			color: hsl(var(--accentHS) var(--accentL));
			font-family: $font_cursiveEmphasis;
			font-size: var(--fontSizeH3);
			margin: 0;
		}
	}
</style>

<!-- ******SCRIPT -->
<script>
	import { onMount } from 'svelte';
	export let introSections;
	let intro = introSections[0];

	onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
				// SCROLLTRIGGER OUT ANIMATION
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: 'section.intro',
						// markers:true,
						scrub: 1,
						start: "center 49%",
						end: "bottom top"
					}
				});
	});
</script>