<script>
    import AnimatedLogo from "$lib/svg/logo/Animated-LOGO.svelte";
</script>

<section class="hero">
    <AnimatedLogo></AnimatedLogo>
</section>

<section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod provident nihil tenetur ratione error sit voluptas. Ex veritatis maxime sunt? Ipsam error porro officiis quam odio eum dolor rerum.</p>
</section>
<section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod provident nihil tenetur ratione error sit voluptas. Ex veritatis maxime sunt? Ipsam error porro officiis quam odio eum dolor rerum.</p>
</section>
<section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod provident nihil tenetur ratione error sit voluptas. Ex veritatis maxime sunt? Ipsam error porro officiis quam odio eum dolor rerum.</p>
</section>
<section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod provident nihil tenetur ratione error sit voluptas. Ex veritatis maxime sunt? Ipsam error porro officiis quam odio eum dolor rerum.</p>
</section>
<section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod provident nihil tenetur ratione error sit voluptas. Ex veritatis maxime sunt? Ipsam error porro officiis quam odio eum dolor rerum.</p>
</section>
<section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod provident nihil tenetur ratione error sit voluptas. Ex veritatis maxime sunt? Ipsam error porro officiis quam odio eum dolor rerum.</p>
</section>
<section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod provident nihil tenetur ratione error sit voluptas. Ex veritatis maxime sunt? Ipsam error porro officiis quam odio eum dolor rerum.</p>
</section>



<style lang="scss">
    section {
        padding: 1rem;
        // background-color: cornsilk;
        &:nth-child(odd) {
            background-color: var(--theme-surface);
        }
        &.hero {
            height: 100%;
            background-image: $brandGradient;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            :global(svg){
                height: 100%;
                width: auto;
                max-width: 100%;
                overflow: visible; /* This prevents clipping when animating the expanding/enlarging */
                box-shadow : 0px -0px 10000px transparent; /*overflow trick for chrome - to do the same as above*/
            }
            @media screen and (min-width: $mdScreen) and (max-width: $xlScreen){
                padding-top: 136px;
            }
        }
    }
</style>