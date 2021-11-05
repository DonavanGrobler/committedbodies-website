<script>
    import { onMount } from 'svelte';
    import heroSlider from "$lib/data/heroSlider.json";
    import { fade } from 'svelte/transition';
    import { quintOut } from "svelte/easing";

    let time = new Date();
    $: seconds = time.getSeconds();

    let activeSlide = 0;

    // $: console.log(activeSlide);
    function prevSlide() {
        if (activeSlide === 0) {
            activeSlide = heroSlider.slides.length - 1;
        } else {
            activeSlide -= 1;
        }
    }
    function nextSlide() {
        if (activeSlide === heroSlider.slides.length - 1) {
            activeSlide = 0;
        } else {
            activeSlide += 1;
        }
    }

    onMount( () => {
        const interval = setInterval(() => {
            time = new Date();
            // console.log(time);
            nextSlide();
        }, 6000);
    });
</script>


<header class="sliderWrap">
    {#each heroSlider.slides as slide, i}
        {#key activeSlide}
            <div id="slide-{i}" class="slide" transition:fade={{ duration: 1000, easing: quintOut }} class:active={i === activeSlide} style="background-image:url({slide.thumbnail})">
                <div class="slideContent">
                    <p class="subtitle">{slide.subtitle}</p>
                    <h2>{slide.title}</h2>
                    {#if slide.paragraph}
                        <p class="paragraph">{slide.paragraph}</p>
                    {/if}
                    {#if slide.buttonText}
                        <button>{slide.buttonText}</button>
                    {/if}
                </div>
            </div>
        {/key}
    {/each}
    <div class="arrows">
        <button on:click={prevSlide}>
            <i>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <use xlink:href="#chevron-left"></use>
                </svg>
            </i>
        </button>
        <button on:click={nextSlide}>
            <i>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <use xlink:href="#chevron-right"></use>
                </svg>
            </i>
        </button>
    </div>
</header>

<style lang="scss">
    header {
        position: relative;
        width: 100vw;
        height: 100vh;
        background: $brand2;
        display: flex;
        justify-content: center;
        align-items: center;
        .slide {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: #ffffff;
            width: 100%;
            height: 100%;
            position: absolute;
            background-size: cover;
            background-position: center;
            display: none;
            &.active {
                display: flex;
            }
            &:before {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background-image: linear-gradient(34deg, rgb(0 0 0), 3%, transparent);
                pointer-events: none;
            }
            .slideContent {
                z-index: 10;
                height: 100vh;
                width: 80vw;
                padding-left: 10vw;
                max-width: 600px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                // border: 1px solid red;
                backdrop-filter: blur(5px);
                h2 {
                    font-family: $font_boldEmphasis;
                    // font-size: 5em;
                    text-transform: uppercase;
                    margin: 0;
                    padding: 0;
                    color: $light2;
                    line-height: 0.9;
                }
                p {
                    margin: 0;
                    padding: 0;
                    &.subtitle {
                        font-family: $font_cursiveEmphasis;
                        color: $brand1;
                        // font-size: 2rem;
                        margin-bottom: 1rem;
                    }
                }
                button {
                    @include buttonPrimary;
                    // font-size: larger;
                    text-transform: uppercase;
                    font-family: $font-boldEmphasis;
                    margin-top: 1rem;
                }
            }
        }
        .arrows {
            z-index: 11;
            width: 100%;
            padding: 0 $spaceMD;
            position: absolute;
            display: flex;
            justify-content: space-between;
            button {
                border: none;
                background: none;
                color: #ffffff;
                cursor: pointer;
            }
        }
    }
</style>