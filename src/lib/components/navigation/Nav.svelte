<script>
    import navigation from '$lib/data/navigation.json'
    // How do I make sure the nav list is compiled on server not on client load?
    import {crossfade} from 'svelte/transition';
    import Logo from "$lib/svg/logo/Logo.svelte";
    import { page } from '$app/stores';
    // console.log(navigation);
    let navlist1 = navigation.navlist1;
    export let y;
    const [send, receive] = crossfade({});
</script>

<svelte:window bind:scrollY={y}/>
<nav class="{y > 100 ? 'scrolled' : ''}">
    <div class="logoWrap">
        <Logo></Logo>
    </div>
    <ul>
        {#each navlist1 as item (item)}
        <li class:active={item.link === $page.path}>
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
            {#if item.link === $page.path}
                <span class="activeIndicator" in:receive out:send>
                </span>
            {/if}
        </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    // -----MOBILE FIRST
    nav {
        z-index: 1000;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        width: 100vw;
        height: $sizeSM;
        transition: all 0.5s linear;
        background-color: $brand1;
        filter: drop-shadow(0px -1px 1px rgba(0, 0, 0, 0.15));
        .logoWrap {
            display: none;
            padding: $spaceSM;
            filter: drop-shadow(0px 0px 20px white);
        }
        ul {
            position: relative;
            display: flex;
            padding: 0;
            margin: 0;
            list-style-type: none;
            width: 100%;
            justify-content: space-between;
            li {
                position: relative;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                a {
                    position: relative;
                    padding: $spaceSM $spaceSM 0 $spaceSM;
                    color: inherit;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: x-small;
                    text-decoration: none;
                    color: rgba(0,0,0,0.7);
                    font-family: "Rajdhani",sans-serif;
                    font-weight: 500;
                    font-style: normal;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.5s linear;
                    span {
                        visibility: hidden;
                    }
                }
                &.active, &:hover {
                    a {
                        font-weight: 600;
                        color: rgba(0,0,0,1);
                    }
                }
                &.active {
                    a {
                        span {
                            visibility: visible;
                        }
                    }
                }
                span.activeIndicator {
                    width: 100%;
                    height: 5px;
                    background: black;
                    position: absolute;
                    top: 0;
                }
            }
        }
    }
    // -----LARGE SCREENS
    @media (min-width: $md) {
        nav {
            bottom: unset;
            top: 0;
            background-color: transparent;
            height: $sizeLG;
            filter: drop-shadow(0px 0px 0 rgba(0,0,0,0));
            padding: 0 $spaceLG;
            .logoWrap {
                display: flex;
                :global(svg) {
                    fill: unset;
                    height: 100%;
                }
            }
            ul {
                justify-content: flex-end;
                li {
                    a {
                        padding: $spaceSM;
                        font-size: medium;
                        color: $transparent_light2;
                        i {
                            display: none;
                        }
                        span {
                            visibility: visible;
                        }
                    }
                    &.active, &:hover {
                        a {
                            color: #ffffff;
                            font-weight: 600;
                        }
                    }
                    span.activeIndicator {
                        display: none;
                    }
                }
            }
            &.scrolled {
                height: $sizeMD;
                background-color: $brand1;
                filter: drop-shadow(0px 1px 15px rgba(0,0,0, .15));
                ul {
                    li {
                        a {
                            color: rgba(0,0,0,0.7);
                        }
                        &.active, &:hover {
                            a {
                                color: rgba(0,0,0,1);
                                font-weight: 600;
                            }
                        }
                        span.activeIndicator {
                            display: block;
                            bottom: 0;
                            top: unset;
                        }
                    }
                }
            }
        }
    }

</style>