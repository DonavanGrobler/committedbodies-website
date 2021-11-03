<script>
    import contact from '$lib/data/contact.json'
    import Logo from '$lib/svg/logo/Logo.svelte';

    // Contact details from data
    let contacts = contact.contacts;
    let socials = contact.socials;
</script>

<section class="contact">
    <a class="mapWrap" href="https://goo.gl/maps/VA4dCUMKpTfk7nPh6" alt="Open Google Maps">
        <img src="/assets/images/map.svg" alt="">
    </a>
    <div class="contactInfo">
        <div class="logoWrap">
            <Logo></Logo>
        </div>
        <h2>CONTACT US</h2>
        <ul class="contactDetails">
            {#each contacts as contact (contact)}
            <li>
                <a href="tel:{contact.phone}" class="contacts_phone">
                    <i>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <use xlink:href="#phone"></use>
                        </svg>
                    </i>
                    {contact.phone}
                </a>
            </li>
            <li>
                <a href="mailto:{contact.email}">
                    <i>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <use xlink:href="#mail"></use>
                        </svg>
                    </i>
                    {contact.email}
                </a>
            </li>
            <li>
                <a href="{contact.mapLink}">
                    <i>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <use xlink:href="#map-pin"></use>
                        </svg>
                    </i>
                    {contact.address}
                </a>
            </li>
            {/each}
        </ul>
        <ul class="socialDetails">
            {#each Object.entries(socials) as [media, link]}
            {#if link}
                <li>
                    <a class="{media} socialLink" href="{link}">
                        <i>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <use xlink:href="#{media}"></use>
                            </svg>
                        </i>
                    </a>
                </li>
            {/if}
            {/each}
        </ul>
    </div>
</section>

<style lang="scss">
    .contact {
        height: auto;
        position: relative;
        background: linear-gradient(180deg, #2E9494 0%, #42A640 36.66%, #A9CF45 95.45%);
        overflow: hidden;
        display: grid;
        padding: 6vw;
        grid-gap: 3rem;
        .contactInfo {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h2 {
                margin: 0;
                color: #ffffff;
            }
            .logoWrap {
                :global(svg) {
                    height:10rem;
                }
            }
            ul.contactDetails {
                color: $transparent_light1;
                padding: 0;
                margin: 0;
                list-style-type: none;
                display: flex;
                flex-direction: column;
                grid-gap: $spaceSM;
                li {
                    a {
                        color: inherit;
                        text-decoration: none;
                        &:hover {
                            color: $black;
                        }
                    }
                }
            }
            ul.socialDetails {
                padding: 0;
                margin: $spaceMD 0 0 0;
                list-style-type: none;
                display: flex;
                flex-wrap: wrap;
                gap: $spaceSM;
                li {
                    padding: 0;
                    margin: 0;
                    a.socialLink {
                        @include buttonDark;
                        padding: 0;
                        width: $sizeSM;
                        height: $sizeSM;
                    }
                }
            }
        }
        a.mapWrap {
            overflow: hidden;
            transition: all 0.7s linear;
            background-color: rgba(255,255,255,0.3);
            border: 1px solid transparent;
            img {
                will-change: transform, scale;
                width: 100%;
                height: 500px;
                object-fit: cover;
                object-position: center center;
                transition: all 0.4s ease-in-out;
                scale: 1;
            }
            &:hover {
                background-color: rgba(255,255,255,0.1);
                border: 1px solid #ffffff;
                    img {
                        transform: scale(2.8);
                    }
            }
        }
    }

    // RESPONSIVE STYLES
    @media (min-width:700px) {
        .contact {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>