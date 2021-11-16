<script>
    import { page } from '$app/stores';
    import navigation from '$lib/data/navigation.json';
    import ThemeSwitcher from '$lib/components/ui-elements/ThemeSwitcher.svelte';
    let actionNavList = navigation.actionNav;
    export let y;
</script>

<nav class="actionNav {y > 80 ? 'scrolled' : ''}" aria-label="Secondary Navigation - take action!">
    <ul>
        <li class="themeSwitchWrap">
            <ThemeSwitcher></ThemeSwitcher>
        </li>
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
        color: hsl(var(--primaryHS) var(--l-100));
        transition: all 0.3s linear;
        padding: 0;
        ul {
            list-style-type: none;
            display: flex;
            align-items: center;
            height: 100%;
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
    @media screen and (max-width: ($mdScreen - 1) ) {
        .actionNav {
            background-color: hsl(var(--primaryHS) var(--primaryL));
            color: hsl(var(--primaryHS) var(--onPrimaryStrength2));
            filter: drop-shadow(0 -1px 2px rgba(0,0,0,0.15));
            ul {
                li {
                    height: 100%;
                    a {
                        font-size: var(--fontSizeSm);
                        i {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 3px;
                            width: 30px;
                            height: 30px;
                            top: 4px;
                            transition: all 0.3s ease-in;
                        }
                        span {
                            padding-bottom: 3px;
                        }
                    }
                    &.active {
                        a {
                            i {
                                padding: $space1;
                                transform: scale(1.5) translateY(-40%);
                                background-color: hsl(var(--accentHS) var(--accentL));
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
            color: hsl(var(--onImage) / var(--onImageStrength0));
            background-color: transparent;
            padding: 0 $space1;
            ul {
                justify-content: flex-end;
                gap: $space1;
                li {
                    flex: unset;
                    a {
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
            &.scrolled {
				color: hsl(var(--primaryHS) var(--onPrimaryStrength2));
			}
        }
    }

    @media screen and (min-width: $xlScreen) {
        .actionNav {
            background-color: transparent;
            padding: 0 0 10% 10%;
            justify-content: flex-start;
            color: hsl(var(--onGradient) / var(--onGradientStrength0));
            &.scrolled {
				color: hsl(var(--onGradient) / var(--onGradientStrength0));
			}
            ul {
                justify-content: flex-start;
                gap: $space1;
                flex: unset;
                li {
                    a {
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

    // Dark theme has a different background color
	:global(.dark) {
		.actionNav {
			color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength1));
			&.scrolled {
				color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength1));
			}
            @media screen and (max-width: ($mdScreen - 1) ) {
                background-color: hsl(var(--accentAltHS) var(--accentAltL));
                .active {
                    a {
                        color: hsl(var(--onAccent) / var(--onAccentStrength3));
                    }
                }
            }
		}
	}
</style>