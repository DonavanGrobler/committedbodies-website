<script>
    export let contact;
    export let classList;
</script>
<ul class="contactDetails {classList}">
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
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: block;
        line-height: 1.5;
        li {
            a {
                font-size: inherit;
                color: inherit;
                text-decoration: none;
                display: grid;
                grid-template-columns: auto 1fr;
                i {
                    margin-right: $space1;
                    svg {
                        fill: transparent;
                        transition: all 0.2s ease-in;
                    }
                }
            }
            &:hover {
                a {
                    i {
                        svg {
                            fill: var($--theme-secondary);
                        }
                    }
                }
            }
        }
    }
</style>