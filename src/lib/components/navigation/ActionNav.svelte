<script>
    import navigation from '$lib/data/navigation.json';
    let actionNavList = navigation.actionNav;
</script>

<nav class="actionNav">
    <ul>
        {#each actionNavList as item (item)}
            <li class="{item.class}">
                <a href="{item.link}">
                <i>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <use xlink:href="#{item.icon}"></use>
                    </svg>
                </i>
                <span>
                    {item.title}
                </span>
            </a>
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    // Default mobile-first styles
    .actionNav {
        background-color: $brand1;
        color: $fontColorDark3;
        padding: 0;
        ul {
            list-style-type: none;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            gap: $space2;
            li {
                flex:1;
                a {
                    font-size: 0.625rem;
                    color: inherit;
                    text-decoration: none;
                    white-space: nowrap;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
    // Responsive styles
    @media screen and (min-width: $mdScreen) {
        .actionNav {
            background-color: transparent;
            color: $fontColorLight3;
            padding: 0 $space1;
            ul {
                justify-content: flex-end;
                gap: $space1;
                li {
                    flex: unset;
                    a {
                        font-size: 1rem;
                        i {
                            display: none;
                        }
                        @include button;
                    }
                    &.primary {
                        a {
                            @include buttonPrimary;
                        }
                    }
                    &.ghost {
                        a {
                            @include buttonGhost;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: $xlScreen) {
        .actionNav {
            background-color: $brand1;
            box-shadow: none;
            padding: 0;
            ul {
                justify-content: center;
                gap: $space1;
                flex: unset;
                li {
                    a {
                        font-size: 1rem;
                        i {
                            display: none;
                        }
                        @include button;
                    }
                    &.primary {
                        a {
                            @include buttonPrimary;
                        }
                    }
                    &.ghost {
                        a {
                            @include buttonGhost;
                        }
                    }
                }
            }
        }
    }
</style>