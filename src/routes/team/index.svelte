<script context="module">
    const allTeam = import.meta.glob('./*.md')
    let team = [];
    for (let path in allTeam) {

        team.push(
            allTeam[path]().then(({ metadata }) => {
                return {path, metadata};
            })
        );
    }
    export const load = async() => {
        const teamMembers = await Promise.all(team);
        return {
            props: {
                teamMembers,
            }
        }
    };
</script>

<script>
    import Header from '$lib/components/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    export let teamMembers;
</script>

<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header>TEAM</Header>
    <section>
        {#each teamMembers as {path, metadata}}
        <article>
            <header>
                <img src="{metadata.thumbnail}" alt="thumbnail">
            </header>
            <div class="content">
                <h3>{metadata.name}</h3>
                {metadata.title}<br>
            </div>
            <footer>
                <a href={`/blog/${path.replace(".md", "")}`}>
                    Read more
                </a>
            </footer>
        </article>
        {/each}
    </section>
</div>


<style lang="scss">
    section {
        padding: $spaceLG;
        margin: $spaceLG;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: $spaceLG;
        article {
            display: grid;
            grid-template-rows: auto 1fr 60px;
            justify-content: space-between;

            @include themewrap0;
            &:hover {
                @include themewrap0-E;
            }
            header {
                img {
                    background: $brand1;
                }
            }
            .content {
                h3 {
                    margin: 0 0;
                }
                padding: $spaceSM;
            }
            footer {
                padding: $spaceSM;
                background-color: $light2;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                a {
                    position: relative;
                    @include buttonPrimary;
                }
            }
        }
    }
</style>
