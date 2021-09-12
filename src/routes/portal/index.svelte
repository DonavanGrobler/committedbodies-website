<script>
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>


<div class="appWrap" in:slideFadeIn out:slideFadeOut>
    <div class="sidebar"></div>

    <div class="content">
        <h1>CREDENTIALS AND DASHBOARD</h1>
        <p>If user is not signed in show the credentials form.</p>
        <p>If user is signed in show the dashboard.</p>
    </div>
</div>

<style lang="scss">
    .appWrap {
        position: relative;
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 4fr;
        .sidebar {
            padding-left: $sizeMD;
            overflow-y: scroll;
            overflow-x: hidden;
            background-color: rgba(0,0,0,0.05);
        }
        .content {
            overflow-y: scroll;
            @include themewrap0;
            height: 150vh;
            padding: $spaceLG;
            margin: $spaceLG;
            height: 160vh;
        }
    }
</style>