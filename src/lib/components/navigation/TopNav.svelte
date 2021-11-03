<nav class="topNav">
    <ul>
        <li>
            <a href="/">Explore</a>
        </li>
        <li>
            <a href="/">Memberships</a>
        </li>
        <li>
            <a href="/">Blog</a>
        </li>
    </ul>
</nav>

<style lang="scss">
    // Default mobile-first styles
    .topNav {
        background-color: $brand1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $fontColorDark3;
        height: 100%;
        ul {
            list-style-type: none;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            li {
                margin: $space1;
                a {
                    color: inherit;
                    text-decoration: none;
                    padding: $space1 $space2;
                }
            }
        }
    }
    // Responsive styles
    @media screen and (min-width: $mdScreen) and (max-width: $xlScreen) {
        .topNav {
            background-color: transparent;
            color: $fontColorLight3;
        }
    }
    @media screen and (min-width: $xlScreen) {
        .topNav {
            ul {
                justify-content: flex-start;
                flex-direction: column;
            }
        }
    }
</style>