<script>
    import navigation from '$lib/data/navigation.json';
    let topNavList = navigation.topNav;
    export let y;
</script>


<nav class="topNav {y > 80 ? 'scrolled' : ''}">
    <ul>
        {#each topNavList as item (item)}
        <li class="{item.class}">
            <a href="{item.link}">{item.title}</a>
        </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    // Default mobile-first styles
    .topNav {
        background-color: $brand1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $fontColorDark3;
        height: 100%;
        ul {
            list-style-type: none;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            li {
                a {
                    font-size: 0.625rem;
                    color: inherit;
                    text-decoration: none;
                    padding: $space1;
                    white-space: nowrap;
                }
            }
        }
    }
    // Responsive styles

    @media screen and (min-width: $mdScreen) and (max-width: $xlScreen) {
        .topNav {
            background-color: transparent;
            color: $fontColorLight3;
            transition: all 0.5s linear;
            ul {
                li {
                    a {
                        font-size: 1rem;
                    }
                }
            }
            &.scrolled {
                color: $fontColorDark3;
            }
        }
    }
    @media screen and (min-width: $xlScreen) {
        .topNav {
            padding: $space2;
            ul {
                justify-content: flex-start;
                flex-direction: column;
                li {
                    a {
                        font-size: 1rem;
                    }
                }
            }
        }
    }
</style>