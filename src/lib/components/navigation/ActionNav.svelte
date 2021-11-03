<nav class="actionNav">
    <ul>
        <li>
            <a href="/">Item</a>
        </li>
        <li>
            <a href="/">Item</a>
        </li>
        <li>
            <a href="/">Item</a>
        </li>
    </ul>
</nav>

<style lang="scss">
    // Default mobile-first styles
    .actionNav {
        background-color: $brand1;
        color: $fontColorDark3;
        ul {
            list-style-type: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            li {
                margin: $space1;
                a {
                    color: inherit;
                    text-decoration: none;
                }
            }
        }
    }
    // Responsive styles
    @media screen and (min-width: $mdScreen) and (max-width: $xlScreen) {
        .actionNav {
            background-color: transparent;
            color: $fontColorLight3;
            ul {
                justify-content: flex-end;
                li {
                    a {
                        @include buttonPrimary;
                    }
                }
            }
        }
    }

    @media screen and (min-width: $xlScreen) {
        .actionNav {
            ul {
                justify-content: center;
                li {
                    a {
                        @include buttonPrimary;
                    }
                }
            }
        }
    }
</style>