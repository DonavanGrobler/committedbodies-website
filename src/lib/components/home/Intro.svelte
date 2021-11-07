<script>
    export let introSections;
    let intro = introSections[0];
</script>

<header>
    <h1>{intro.title}</h1>
    <p class="subtitle h4">{intro.subtitle}</p>
</header>
<section class="intro background2">
    <img class="imgBefore" src="{intro.imageBefore}" alt="">
    <img class="imgAfter" src="{intro.imageAfter}" alt="">
    <div class="contentPrimary">
        {@html intro.text}
        <!-- {#if intro.buttonText}
            <a class="button ghost" href="{intro.buttonLink}">{intro.buttonText}</a>
        {/if} -->
    </div>
</section>

<style lang="scss">
    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 6vw 0 0 0;
        h1 {
            font-size: 4em;
            text-align: center;
        }
        .subtitle {
            font-family: $font_cursiveEmphasis;
            font-size: 1.5em;
            margin-top: 0;
        }
    }
	section {
        // border: 1px solid red;
		max-width: 70em;
    	margin: 0 auto;
    }
    section.intro {
        overflow: auto;
        .imgBefore {
            float: left;
            width: 35%;
            shape-outside: url(https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1635584514/ui-assets/beforeFront2_s0blvc.png);
            shape-margin: 2em;
        }
        .imgAfter {
            float: right;
            width: 35%;
            shape-outside: url(https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1635583370/ui-assets/afterFront_2_up6xo9.png);
            shape-margin: 2em;
        }
        .contentPrimary {
            margin-top: 6em;
            text-align: center;
        }
    }

</style>