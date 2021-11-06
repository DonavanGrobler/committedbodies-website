<script>
    import { page } from '$app/stores';
    import navigation from '$lib/data/navigation.json';
    import contactData from '$lib/data/contact.json';
    import ContactDetails from '$lib/components/contact/ContactDetails.svelte'
    let topNavList = navigation.topNav;
    let contact = contactData.contacts[0];
    export let y;
</script>


<nav class="topNav {y > 80 ? 'scrolled' : ''}" aria-label="Primary Navigation">
    <ul>
        {#each topNavList as item (item)}
        <li class="{item.class}" class:active={item.link === $page.path}>
            <a href="{item.link}">{item.title}</a>

            {#if item.subnav}
                <div class="subNav {item.subnavClass}">
                    <ul>
                        {#each item.subnav as subnavItem}
                            <li class="{subnavItem.class}">
                                <a href="{subnavItem.link}">
                                    {subnavItem.title}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
            {#if item.title == "Contact"}
                <div class="subNav hideSM hideMD">
                    <ContactDetails {contact} classList="theme-on-primary"></ContactDetails>
                </div>
            {/if}
        </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    // Default mobile-first styles
    // Background-Color is set in a __layout : div.navColor
    .topNav {
        display: flex;
        justify-content: center;
        align-items: center;
        // Padding right balances the logo that has a grid-column of 50px;
        padding-right: 50px;
        color: var(--theme-on-primary);
        height: 100%;
        ul {
            list-style-type: none;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            li {
                a {
                    display: block;
                    color: inherit;
                    text-decoration: none;
                    padding: $space1;
                    white-space: nowrap;
                    transform: scale(1);
                    transition: all 0.2s ease-in;
                    transform-origin: center;
                    &:hover {
                        opacity: 0.7;
                        transform: scale(1.06);
                    }
                }
                &.active {
                    opacity: 0.7;
                }
            }
        }
    }

    // Responsive styles
    // Remove padding from really small screens
    @media screen and (max-width: 390px) {
        .topNav {
            padding-right: 0;
        }
    }
    @media screen and (min-width: $mdScreen) {
        .topNav {
            padding-right: 0;
            color: var(--theme-on-image);
            transition: all 0.5s linear;
            ul {
                li {
                    a {
                        text-decoration: none;
                    }
                }
            }
            &.scrolled {
                color: var(--theme-on-primary);
            }
        }
    }
    @media screen and (min-width: $xlScreen) {
        .topNav {
            color: var(--theme-on-primary);
            overflow-y: scroll;
            padding: 0 10% 10% 10%;
            justify-content: flex-start;
            background-color: transparent;
            ul {
                display: flex;
                padding: 0;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 1em;
                li {
                    a {
                        font-size: 1.6em;
                        font-weight: 600;
                        padding: 0;
                        transform-origin: left center;
                    }
                    .subNav {
                        // margin-top: $space1;
                        ul {
                            padding: 0;
                            line-height: 1.5;
                            margin: 0;
                            gap: 0;
                            li {
                                margin-bottom: 0;
                                a {
                                    font-size: 1em;
                                    font-weight: 400;
                                    padding: 0;
                                    transform-origin: left center;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>