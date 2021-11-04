<script>
    export let contact;
</script>
<a class="contactByte" href="{contact.link}">
    <i>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <use xlink:href="{contact.icon}"></use>
        </svg>
    </i>
    {contact.text}
</a>