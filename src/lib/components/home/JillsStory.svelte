<script>
    import Clock from '$lib/svg/Clock.svelte';
</script>


<section class="jillsStory">
            <div class="jillBefore">
                <img src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1634543981/ui-assets/beforeFront_zzufzf.png" alt="">
            </div>
            <div class="content">
                <div class="titleWrap">
                    <div class="longArm">
                        <div class="arm"></div>
                        <div class="clockWrap">
                            <Clock></Clock>
                        </div>
                    </div>
                    <h2>
                        I took<br>back<br>my life
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
                <img src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1634544410/ui-assets/afterFront_rpcsmd.png" alt="">
            </div>
    </section>


<style lang="scss">
    .jillsStory {
        border: 1px solid red;
        width: 100vw;
        padding: $sizeMD;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            "content content"
            "before after";
        @media all and (min-width: $md) {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas:
            "before content after";
        }
    }
    .jillBefore {
        grid-area: before;
    }
    .jillAfter {
        grid-area: after;
    }
    .content {
        grid-area: content;
    }
</style>