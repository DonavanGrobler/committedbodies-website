<script>
    import { page } from '$app/stores';
    import navigation from '$lib/data/navigation.json';
    let actionNavList = navigation.actionNav;
</script>

<nav class="actionNav" areia-label="Action navigation">
    <ul>
        {#each actionNavList as item (item)}
            <li class="{item.class}" class:active={item.link === $page.path}>
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
        color: var(--theme-on-primary);
        padding: 0;
        ul {
            list-style-type: none;
            display: flex;
            // justify-content: space-around;
            align-items: center;
            height: 100%;
            // gap: $space2;
            li {
                flex:1;
                position: relative;
                a {
                    height: 100%;
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

    // MOBILE IS VERY DIFFERENT > MEDIA QUERY
    @media screen and (max-width: $mdScreen) {
        .actionNav {
            background-color: var(--theme-primary);
            filter: drop-shadow(0 -1px 2px rgba(0,0,0,0.15));
            ul {
                li {
                    // border: 1px solid red;
                    height: 100%;
                    a {
                        @include fontSM;
                        // border: 1px solid yellow;
                        i {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: absolute;
                            padding: 0;
                            width: 30px;
                            height: 30px;
                            top: 4px;
                            transition: all 0.3s ease-in;
                        }
                        span {
                            position: absolute;
                            bottom: 3px;
                        }
                    }
                    &.active {
                        a {
                            i {
                                padding: $space1;
                                transform: scale(1.5) translateY(-40%);
                                background-color: var(--theme-accent);
                                border-radius: 50%;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: $mdScreen) {
        .actionNav {
            background-color: transparent;
            padding: 0 $space1;
            ul {
                justify-content: flex-end;
                gap: $space1;
                li {
                    flex: unset;
                    a {
                        // font-size: 1rem;
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
            // border: 1px solid red;
            background-color: transparent;
            padding: 0 0 10% 10%;
            justify-content: flex-start;
            ul {
                // border: 1px solid blue;
                justify-content: flex-start;
                gap: $space1;
                flex: unset;
                li {
                    a {
                        // font-size: 1rem;
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