<script>
    import contactData from '$lib/data/contact.json';
	import ContactDetails from '$lib/components/ContactDetails.svelte'
    import Logo from '$lib/svg/logo/Logo.svelte';

    // Contact details from data
    let contacts = contactData.contacts[0];
    let socials = contactData.socials;
</script>

<section class="contactSection">
    <!-- Title -->
    <h2><span>Contact Us</span></h2>
     
    <!-- Two Columns -->
    <div class="contactWrap">
        <!-- Info Column -->
        <div class="contactInfo">
            <div class="logoWrap">
                <Logo></Logo>
            </div>  
            <ContactDetails {contacts} classList="theme-on-primary" /> 
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
        <!-- Map Column -->
        <a class="contactMap" href="https://goo.gl/maps/VA4dCUMKpTfk7nPh6" alt="Open Google Maps">
            <img src="/assets/images/map.svg" alt="">
        </a>
    </div>    
</section>

<style lang="scss">
    .contactSection {
        h2 {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 0 3rem 0;
            color: hsla(var(--onNeutral) / var(--onNeutralStrength3));
            font-family: $font_boldEmphasis;
            span {
                border: 3px solid hsl(var(--accentHS) var(--accentL));
                padding: 1rem 2rem;
                text-align: center;
                width: auto;
            }
        }
        .contactWrap {
            display: flex;
             flex-direction: column;
             color: hsla(var(--onNeutral) / var(--onNeutralStrength1));
            .contactInfo {
                margin: 2rem;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                :global(.contactDetails li) {
                    text-align: center;
                }
                .socialDetails li {
                    text-align: center;
                    display: block;
                    &::before {
                        display: none;
                    }
                }
                .logoWrap {
                    width: 30%;
                }
                .socialDetails {
                    display: flex;
                    gap: 1rem;
                    margin-top: 2rem;

                }
            }
            a.contactMap {
                flex: 1;
                text-decoration: none;
                transition: all 0.7s linear;
                background-color: rgba(255,255,255,0.3);
                display: grid;
                place-items: center;
                overflow: hidden;
                margin: 2rem;
                &:before {
                    content: "Open in Google Maps";
                    padding: 1rem;
                    border: 1px solid hsl(var(--accentHS) calc(var(--accentL) - 10%));
                    background-color: hsl(var(--accentHS) calc(var(--accentL) - 10%));
                    color: hsl(var(--onAccent) / var(--onAccentStrength0));
                    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
                    z-index: 2;
                    position: absolute;
                    transform: scale(0);
                    opacity: 0;
                    transition: all 0.3s ease-out;
                }
                img {
                    will-change: transform, scale;
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    object-position: center center;
                    transition: all 0.4s ease-in-out;
                    transform: scale(1);
                    z-index: 1;
                }
                &:hover {
                    &:before {
                        transform: scale(1);
                        opacity: 1;
                    }
                    img {
                        transform: scale(1.5);
                    }
                }
            }
        }
    }
    @media screen and (min-width: $mdScreen) {
        .contactSection {
            .contactWrap {
                flex-direction: row-reverse;
                .contactInfo {
                    align-items: flex-start;
                    :global(.contactDetails li) {
                        text-align: left;
                    }
                }
            }
        }
    }
</style>