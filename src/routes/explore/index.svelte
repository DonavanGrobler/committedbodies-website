<script>
    import Header from '$lib/components/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>


<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header>EXPLORE</Header>
    <section id="facility">
        <h2>Facility</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, inventore recusandae. Nostrum explicabo quibusdam cumque nam beatae consequuntur. Necessitatibus beatae maiores nostrum cupiditate unde sequi aperiam omnis nesciunt ratione sit.</p>
    </section>
    <section id="trainers">
        <h2>Personal Trainers</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, inventore recusandae. Nostrum explicabo quibusdam cumque nam beatae consequuntur. Necessitatibus beatae maiores nostrum cupiditate unde sequi aperiam omnis nesciunt ratione sit.</p>
    </section>
    <section id="services">
        <h2>Services</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, inventore recusandae. Nostrum explicabo quibusdam cumque nam beatae consequuntur. Necessitatibus beatae maiores nostrum cupiditate unde sequi aperiam omnis nesciunt ratione sit.</p>
    </section>
</div>



<style lang="scss">
    section {
        padding: $space2;
        max-width: 100%;
    }
</style>
