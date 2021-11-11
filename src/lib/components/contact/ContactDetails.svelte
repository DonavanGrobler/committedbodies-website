<script>
    export let contact;
</script>
<ul class="contactDetails">
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
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <use xlink:href="#map-pin"></use>
                </svg>
            </i>
            {contact.address}
        </a>
    </li>
</ul>


<style lang="scss">
    ul.contactDetails {
        font-size: inherit;
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: block;
        line-height: 1.5;
        color: currentColor;
        li {
            font-size: inherit;
            color: currentColor;
            a {
                font-size: inherit;
                color: currentColor;
                text-decoration: none;
                display: grid;
                grid-template-columns: auto 1fr;
                transition: all 0.2s ease-in;
                transform-origin: center bottom;
                transform: scale(1);
                line-height: 1.5;
                i {
                    margin-right: 1em;
                    svg {
                        fill: transparent;
                        transition: all 0.2s ease-in;
                    }
                }
            }
            &:hover {
                a {
                    // opacity: 1;
                    i {
                        svg {
                            fill: currentColor;
                            stroke: hsl(var(--primaryHS) var(--primaryL));
                        }
                    }
                }
            }
        }
    }
</style>