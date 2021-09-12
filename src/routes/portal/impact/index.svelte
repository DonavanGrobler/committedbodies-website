<script>
</script>

<div class="appWrap">
    <div class="sidebar">SIDEBAR</div>

    <div class="content">
        <h1>IMPACT</h1>
        <p>Map view shows leadership network and statistics.</p>
        <p>Spheres of impact for individuals</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia tenetur mollitia voluptate. Officiis, commodi. Natus sapiente fugit delectus, non sed iure repellat ab commodi, pariatur amet, laboriosam repudiandae itaque odio?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, recusandae delectus magni architecto esse quibusdam aliquam doloremque necessitatibus impedit ab dolores beatae, nam mollitia. Consequatur ipsa incidunt optio ab omnis!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et minima sequi laborum quod saepe, velit necessitatibus molestias quisquam omnis ut quia totam error ipsum sit dolorem autem. Eveniet, voluptatum ullam!</p>
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
            overflow-y: scroll;
            background-color: $dark1;
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