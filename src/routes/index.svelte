<script>
    import AnimatedLogo from "$lib/svg/logo/Animated-LOGO.svelte";
</script>

<section class="hero">
    <AnimatedLogo></AnimatedLogo>
</section>

<section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at cum laborum ducimus dolorem doloremque expedita debitis, nam temporibus quos voluptatem perspiciatis dolor fugit harum culpa eveniet officia voluptate reiciendis commodi accusantium ratione dolorum saepe nihil. Voluptatum, ratione. Cupiditate, alias? Accusamus consequatur eaque alias delectus dignissimos facilis in ea sunt.
</section>

<section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at cum laborum ducimus dolorem doloremque expedita debitis, nam temporibus quos voluptatem perspiciatis dolor fugit harum culpa eveniet officia voluptate reiciendis commodi accusantium ratione dolorum saepe nihil. Voluptatum, ratione. Cupiditate, alias? Accusamus consequatur eaque alias delectus dignissimos facilis in ea sunt.
</section>

<section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at cum laborum ducimus dolorem doloremque expedita debitis, nam temporibus quos voluptatem perspiciatis dolor fugit harum culpa eveniet officia voluptate reiciendis commodi accusantium ratione dolorum saepe nihil. Voluptatum, ratione. Cupiditate, alias? Accusamus consequatur eaque alias delectus dignissimos facilis in ea sunt.
</section>

<section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at cum laborum ducimus dolorem doloremque expedita debitis, nam temporibus quos voluptatem perspiciatis dolor fugit harum culpa eveniet officia voluptate reiciendis commodi accusantium ratione dolorum saepe nihil. Voluptatum, ratione. Cupiditate, alias? Accusamus consequatur eaque alias delectus dignissimos facilis in ea sunt.
</section>

<section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at cum laborum ducimus dolorem doloremque expedita debitis, nam temporibus quos voluptatem perspiciatis dolor fugit harum culpa eveniet officia voluptate reiciendis commodi accusantium ratione dolorum saepe nihil. Voluptatum, ratione. Cupiditate, alias? Accusamus consequatur eaque alias delectus dignissimos facilis in ea sunt.
</section>

<section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at cum laborum ducimus dolorem doloremque expedita debitis, nam temporibus quos voluptatem perspiciatis dolor fugit harum culpa eveniet officia voluptate reiciendis commodi accusantium ratione dolorum saepe nihil. Voluptatum, ratione. Cupiditate, alias? Accusamus consequatur eaque alias delectus dignissimos facilis in ea sunt.
</section>

<section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at cum laborum ducimus dolorem doloremque expedita debitis, nam temporibus quos voluptatem perspiciatis dolor fugit harum culpa eveniet officia voluptate reiciendis commodi accusantium ratione dolorum saepe nihil. Voluptatum, ratione. Cupiditate, alias? Accusamus consequatur eaque alias delectus dignissimos facilis in ea sunt.
</section>


<style lang="scss">
    section {
        padding: 1rem;
        // background-color: cornsilk;
        &:nth-child(odd) {
            background-color: var($--theme-surface);
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