<footer>
    <div class="aboutWidget">
        <h5>About Committed Bodies</h5>
        By sonya.ninja
    </div>
    <div class="siteMapWidget">
        <h5>Site Map</h5>
    </div>
    <div class="contactWidget">
        <h5>Contact</h5>
    </div>
</footer>

<style lang="scss">
    footer {
        position: relative;
        width: 100vw;
        background: $neutral2;
        padding: 6vw;
        color: #ffffff;
        justify-items: space-between;
        align-items: flex-start;
    }

    // Responsive Styles
    @media (min-width:700px) {
        footer {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>