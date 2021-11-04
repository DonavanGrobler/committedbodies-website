<script>
    import { page } from '$app/stores';
    import navigation from '$lib/data/navigation.json';
    import contactData from '$lib/data/contact.json';
    let topNavList = navigation.topNav;
    let contacts = contactData.contacts;
    export let y;
</script>


<nav class="topNav {y > 80 ? 'scrolled' : ''}">
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
                <div class="littleContacts hideSM hideMD">
                    {#each contacts as contact (contact)}
                        <div>{contact.phone}</div>
                        <div>{contact.email}</div>
                    {/each}
                </div>
            {/if}
        </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    // Default mobile-first styles
    .topNav {
        background-color: $brand1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: $fontColorDark2;
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
                    font-size: 0.7rem;
                    color: inherit;
                    text-decoration: none;
                    padding: $space1;
                    white-space: nowrap;
                    transform: scale(1);
                    transition: all 0.2s ease-in;
                    &:hover {
                        color: $fontColorDark1;
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

    @media screen and (min-width: $mdScreen) and (max-width: $xlScreen) {
        .topNav {
            background-color: transparent;
            color: $fontColorLight2;
            transition: all 0.5s linear;
            ul {
                li {
                    a {
                        font-size: 1rem;
                    }
                }
            }
            &.scrolled {
                color: $fontColorDark2;
            }
        }
    }
    @media screen and (min-width: $xlScreen) {
        .topNav {
            overflow-y: scroll;
            // border: 1px solid red;
            padding: 5% 10%;
            justify-content: flex-start;
            background-color: transparent;
            ul {
                display: block;
                padding: 0;
                // border: 1px solid blue;
                li {
                    // border: 1px solid white;
                    a {
                        font-size: 1.3rem;
                        color: $fontColorDark3;
                        font-weight: 500;
                        padding: 0;
                    }
                    .subNav {
                        // border: 1px solid green;
                        ul {
                            padding: 0;
                            // border: 1px solid blue;
                            li {
                                margin-bottom: 0;
                                a {
                                    font-size: 1rem;
                                    color: $fontColorDark2;
                                    font-weight: 400;
                                    padding: 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>