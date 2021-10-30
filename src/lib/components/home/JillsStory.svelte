<script>
    import Clock from '$lib/svg/Clock.svelte';
</script>


<section class="jillsStory">
            <div class="jillBefore">
                <img src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1635584514/ui-assets/beforeFront2_s0blvc.png" alt="">
            </div>
            <div class="content">
                <!-- <div class="clockWrap">
                    <Clock></Clock>
                </div> -->
                <!-- <div class="longArm"></div> -->
                <div class="titleWrap">
                    <h2>
                        I took back my life
                    </h2>
                </div>
                <div class="copyWrap">
                    <p>
                        The day I turned 52, I looked in the mirror and did not recognise the woman staring back at me. I had lost my energy, enthusiasm and figure. I looked like I felt - old, flabby and tired. I had two choices - continue down this road, or I could take back my life. Nine months later I had transformed my body and my life.
                    </p>
                    <p>
                        In 2018, my husband and I launched Committed Bodies Gym. We specialise in transformations - our mission is to help you take back your life.
                    </p>
                    <p class="signature">
                        Jill Myburgh
                    </p>
                </div>
            </div>
            <div class="jillAfter">
                <img src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1635583370/ui-assets/afterFront_2_up6xo9.png" alt="">
            </div>
    </section>


<style lang="scss">
    .jillsStory {
        // border: 1px solid red;
        width: 100vw;
        padding: 6vw;
        display: grid;
        align-items: flex-end;
        justify-items: center;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            "content content"
            "before after";
    }
    .jillBefore {
        // border: 1px solid blue;
        grid-area: before;
        display: flex;
        justify-content: flex-end;
    }
    .jillAfter {
        // border: 1px solid red;
        grid-area: after;
        display: flex;
        justify-content: flex-start;
    }
    .content {
        grid-area: content;
        .titleWrap {
            h2 {
                font-size: 4em;
                line-height: 1;
                font-weight: 900;
                margin: 0;
            }
        }
        p.signature {
            font-family: $font_cursiveEmphasis;
            font-size: 2rem;
            margin: 0;
            // color: $brand3
        }
    }
    // MD - LG SCREENS
    @media all and (min-width: 980px) {
        .jillsStory {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas:
            "before content after";
        }
    }
</style>