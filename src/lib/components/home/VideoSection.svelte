<script>
    export let introSections;
    let section = introSections[1];
</script>


<section>
    <video autoplay muted loop id="myVideo">
        <source src="https://res.cloudinary.com/committed-bodies/video/upload/ac_none,q_auto,vc_auto/v1635629163/video/CommittedBodies-Take-Back-Your-Life_pvhloh.mp4" type="video/mp4">
    </video>
    <div class="contentWrap">
        <header>
            <h2 class="lookAtMeTitle">Your Journey starts now!</h2>
        </header>
        <div class="buttonWrap">
            <svg class="line" preserveAspectRatio="none" viewbox="-1 -1 6 800" width="6" height="800">
                <line x="0" y1="0" x2="0" y2="800"></line>
            </svg>
            <a class="button primary" href="/">Watch</a>
        </div>
    </div>
</section>

<style lang="scss">
    // Mobile first default styles
    section {
        position: relative;
        display: flex;
        flex-direction: column;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: $brandGradient;
            opacity: 0.8;
            z-index:1;
        }
        .contentWrap {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 2;
            max-width: 70em;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            padding: 0;
            .buttonWrap {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                height: 30%;
                svg {
                    height: 100%;
                    stroke-width: 4px;
                    stroke: $brand2;
                    position: absolute;
                    z-index: 1;
                    visibility: hidden;
                }
                .button {
                    @include button;
                    @include buttonPrimary;
                    z-index: 2;
                    font-size: 1.5em;
                    text-transform: uppercase;
                    font-weight: 900;
                }
            }
            header {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h2.lookAtMeTitle {
                    text-align: center;
                    color: var(--theme-on-image);
                    max-width: 16ch;
                }
            }
        }
    }

    // Responsive styles

    // MED > SCREENS SECTION LAYOUTS
	@media screen and (min-width: $mdScreen) {
		section {
            .contentWrap {
                .buttonWrap {
                    svg {
                        visibility: visible;
                    }
                }
            }
		}
	}
</style>