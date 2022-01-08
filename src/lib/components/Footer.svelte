<script>
    import siteData from "$lib/data/site.json";
</script>
<footer>
    <div class="footerContent">
        <div class="aboutWidget">
        <h5>About Committed Bodies</h5>
        <p>{siteData.config.about}</p>
        </div>
        <div class="siteMapWidget align-right">
            <h5>Start now</h5>
            <ul>
                <li><a href="/">Select a membership</a></li>
                <li><a href="/">Another action</a></li>
                <li><a href="/">A question</a></li>
            </ul>
        </div>
        <div class="siteMapWidget">
            <h5>Not sure?</h5>
            <ul>
                <li><a href="/">Find us</a></li>
                <li><a href="/">Make an appointment</a></li>
                <li><a href="/">Join a class</a></li>
            </ul>
        </div>
    </div>
    <div class="tagline">
        <div class="copyright">
            &copy; 2022 Committed Bodies
        </div>
        <div class="credit">
            Site by <a href="www.sonya.ninja" alt="Kick-ass websites by Sonya.Ninja">SONYA.NINJA</a>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        position: relative;
        background: hsl(var(--accentAltHS) var(--accentAltL));
        color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength0));
        font-weight: 300;
         a {
            color: inherit;
            text-decoration: none;
        }
        .footerContent {
            padding: 1rem;
            align-items: flex-start;
            div {
            // border: 1px solid white;
            p {
                margin-top: 0;
            }
            }
            h5 {
                font-size: 1.2rem;
                margin-top: 0;
                font-weight: 300;
                color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength3));
            }
            .siteMapWidget {
                padding: 1rem;
                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
            }
        }
        .tagline {
            padding: 1rem 1rem 2rem 1rem;
            display: flex;
            justify-content: space-between;
            background-color: hsl(var(--accentAltHS) calc(var(--accentAltL) - 10%));
            color: hsla(var(--onAccentAlt) / var(--onAccentAltStrength3));
            font-size: 0.8rem;
            // .credit {
            //     border: 1px solid red;
            // }
            // .copyright {
            //     border: 1px solid red;
            // }
        }
        
        
    
        
    }

    // Responsive Styles
    @media (min-width: $mdScreen) {
        footer {
            .footerContent {
                display: grid;
                grid-template-columns: 1fr auto auto;
                grid-gap: 1rem;
                .aboutWidget {
                    p {
                        max-width: 40ch;
                    }
                }
                .siteMapWidget {
                    padding: 0;
                    &.align-right {
                        padding: 0 1rem 0 0;
                        text-align: right;
                        border-right: 1px solid hsl(var(--onAccentAlt) / var(--onAccentAltStrength3));
                    }
                }
            }
            .tagline {
                padding: 1rem;
            }
        }
    }
</style>