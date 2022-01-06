<script>
    import BreadCrumbs from "$lib/components/NavBreadCrumbs.svelte";
    export let headerImage = "https://res.cloudinary.com/sonya-ninja/image/upload/t_pageHeader/v1631293309/committedbodies/gym/Gym-in-Benoni_lkncqu.jpg";
</script>


<header>
    <img src="{headerImage}" alt="">
    <div class="titleWrap">
        <h1>
            <slot />
        </h1>
        <BreadCrumbs></BreadCrumbs>
    </div>
</header>

<style lang="scss">
    header {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
        }
        .titleWrap {
            position: absolute;
            z-index: 3;
            color: $transparent_light1;
            h1 {
                color: #ffffff;
                font-family: 'Rajdhani', sans-serif;
                font-size: 5.143em;
                font-weight: 700;
                font-style: normal;
                line-height: 0.9301em;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 0px;
                padding: 0;
                margin: 0;
            }
        }
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            // background-color: rgba(0,0,0,0.6);
            background-image: linear-gradient(127deg, rgb(0 0 0 / 70%), 5%, rgb(0 0 0 / 40%));
        }

    }
</style>