<section>
    <video autoplay muted loop id="myVideo">
        <source src="https://res.cloudinary.com/committed-bodies/video/upload/ac_none,q_auto,vc_auto/v1635629163/video/CommittedBodies-Take-Back-Your-Life_pvhloh.mp4" type="video/mp4">
    </video>
    <div class="content">
        <h2>Your journey starts now!</h2>
        <div class="buttonWrap">
            <button>WATCH</button>
            <svg class="line" preserveAspectRatio="none" viewbox="-1 -1 6 800" width="6" height="800">
                <line x="0" y1="0" x2="0" y2="800"></line>
            </svg>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        position: relative;
        display: grid;
        background-color: $brand2;
        padding: 0;
        width: 100vw;
        aspect-ratio: 16 / 5;
        video {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .content {
            height: 100%;
            margin: auto;
            z-index: 5;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            h2 {
                font-family: $font_boldEmphasis;
                color: #ffffff;
                font-size: var(--fs-xl);
                margin: 0;
            }
            .buttonWrap {
                // border: 1px solid blue;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                button {
                    @include buttonPrimary;
                }
                svg {
                    height: 100px;
                    stroke-width: 4px;
                    stroke: $brand2;
                    // position: absolute;
                }
            }
        }
        &:before {
            content: "";
            background: linear-gradient(180deg, #2E9494 0%, #42A640 36.66%, #A9CF45 95.45%);
            // background: $brand2;
            width: 100%;
            height: 100%;
            z-index: 1;
            opacity: 0.8;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
</style>