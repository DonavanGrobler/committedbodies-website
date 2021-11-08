<script>
    import Header from '$lib/components/ui-elements/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>

<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header>ABOUT</Header>

    <div class="pageContentWrap removeTopBottom">
        <section class="colorPalette">
            <h1>COLOR PALETTE</h1>
            <div class="gridWrap">
                <div class="colorBlock primary">
                    <div class="shade1">Shade 10</div>
                    <div class="shade2">Shade 20</div>
                    <div class="shade3">Shade 30</div>
                    <div class="shade4">Shade 40</div>
                    <div class="shade5">BRAND PRIMARY (50)</div>
                    <div class="shade8">Shade 80</div>
                    <div class="shade9">Shade 90</div>
                    <div class="shade10">Shade 100</div>
                </div>
                <div class="colorBlock accent">
                    <div class="shade1">Shade 1</div>
                    <div class="shade2">Shade 2</div>
                    <div class="shade3">Shade 3</div>
                    <div class="shade4">Shade 4</div>
                    <div class="shade5">BRAND ACCENT (5)</div>
                    <div class="shade8">Shade 8</div>
                    <div class="shade9">Shade 9</div>
                </div>
                <div class="colorBlock neutralLight">
                    <div class="shade1">Shade 1</div>
                    <div class="shade2">Shade 2</div>
                    <div class="shade3">Shade 3</div>
                    <div class="shade4">Shade 4</div>
                    <div class="shade5">Shade 5</div>
                    <div class="shade8">Shade 8</div>
                    <div class="shade9">Shade 9</div>
                </div>
                <div class="colorBlock neutralDark">
                    <div class="shade1">Shade 1</div>
                    <div class="shade2">Shade 2</div>
                    <div class="shade3">Shade 3</div>
                    <div class="shade4">Shade 4</div>
                    <div class="shade5">Shade 5</div>
                    <div class="shade8">Shade 8</div>
                    <div class="shade9">Shade 9</div>
                </div>

            </div>
        </section>
        <section>
            <h1>Heading One - a long one so we can check line height for headings.</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, excepturi? Labore asperiores culpa amet, nisi modi doloremque corrupti nihil quo maxime, ipsa voluptatibus eveniet! Numquam atque ducimus praesentium accusamus tempore?
                Totam dignissimos quas, non delectus iusto corrupti repudiandae facilis beatae eos pariatur eaque impedit sunt nulla voluptatem a sit exercitationem necessitatibus deleniti cumque eveniet distinctio itaque optio quam? Harum, sunt?
                Illo dicta voluptatum harum iusto esse quae hic iste ratione laborum cupiditate reiciendis, amet modi cum veritatis necessitatibus maiores veniam aperiam nostrum placeat quas mollitia doloremque quisquam sed. Tempora, molestiae?
                Temporibus, <a href="/">This is a link to the home page</a> laudantium cumque dolore provident nemo placeat, neque cupiditate aspernatur minima debitis rerum ducimus velit ex nisi ullam incidunt sed corporis quasi nesciunt eligendi cum molestiae necessitatibus? Placeat, exercitationem magni.
                Repellendus doloribus quia id ipsum est incidunt, tenetur laboriosam voluptas animi excepturi, quod officia eum amet voluptatem perspiciatis aliquam sequi exercitationem eaque, pariatur corrupti libero! Modi nisi nulla iure accusantium.
            </p>
            <h2>Heading Two</h2>
            <p>
                This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again until it does wrap. This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again until it does wrap. This is a paragraph of text that should be long enough to wrap.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam iure, ut, voluptate quos excepturi nulla sed non, accusamus officia id repellendus? Fuga saepe ut officia aspernatur optio quo quia?</p>
            <h3>Heading Three</h3>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem officiis, obcaecati molestiae deleniti aliquid reiciendis debitis possimus soluta unde animi eum rem earum ullam at illo error nobis labore?
            </p>
            <h4>Heading Four</h4>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, nemo ab, sed expedita fugit laudantium illum ducimus unde magnam nam sequi itaque necessitatibus. Quis cum rerum ex, asperiores maxime veniam!
            </p>
            <h5>Heading Five</h5>
            <p>
                This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again until it does wrap. This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again until it does wrap. This is a paragraph of text that should be long enough to wrap.
            </p>
            <h6>Heading Six</h6>
            <p>
                This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again until it does wrap. This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again until it does wrap. This is a paragraph of text that should be long enough to wrap.
            </p>
        </section>
        <section>
            <p>
                <em>This is italic text, made with em.</em> <i>This is italic text as well, made with i.</i>
            </p>
            <p>
                <strong>This is bold text, made with strong.</strong> <b>This is bold text as well, made with b.</b>
            </p>
            <p>
                <u>This is underlined text, made with u.</u> <ins>This is inserted text, made with ins.</ins>
            </p>
            <p>
                <strike>This is deleted (strikethrough) text, made with strike.</strike> <s>This is also strikethrough text, but made with s.</s> <del>This is deleted text, made with del.</del>
            </p>
            <hr>
            <p>
                <code>This is computer code, made with code.</code> <tt>This is teletype text, made with tt.</tt>
            </p>
            <p>
                <kbd>This is text the user is supposed to enter in, or keyboard, made with kbd.</kbd> <var>This is a variable, made with var.</var> <samp>This is sample program output, made with samp.</samp>
            </p>
            <p>
                <small>This is small text, made with small.</small> <big>This is big text, made with big.</big>
            </p>
            <p>
                <cite>This is a citation, made with cite.</cite> This is a <q>short quotation</q> in the middle of a sentence, made with q.
            </p>
            <p>
                This sentence ends with a <sup>superscript</sup>. This sentence ends with a <sub>subscript</sub>.
            </p>
            <p>
                This is an abbreviation, made with abbr: <abbr>WWW</abbr>. This is an acronym, made with acronym: <acronym>NATO</acronym>. This is a term that needs a definition, made with dfn: <dfn>Yog-Sothoth</dfn>.
            </p>
        </section>
        <section>
            <p>
                This is an unordered list:
            </p>
            <ul>
                <li>Koyaanisqatsi</li>
                <li>Powaqqatsi</li>
                <li>Naqoyqatsi</li>
                <li><a href="/">This is a link to the home page</a></li>
            </ul>
            <p>
                This is an unordered list with long content:
            </p>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum provident velit fuga voluptates. Distinctio eligendi voluptates quae, dolorum recusandae consequuntur maiores unde rerum explicabo, mollitia delectus nam officiis nihil!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis facilis natus dolorem dignissimos iusto at qui sint, fugiat earum iste itaque dicta ipsum labore quis nihil, tempore rerum libero!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, ullam. Quae sed, ipsa ab rem eveniet cupiditate eum deleniti libero consectetur ea repellat minima vitae sequi. Facere suscipit ab fuga.</li>
                <li><a href="/">This is a link to the home page</a></li>
            </ul>
            <p>
                This is an ordered list:
            </p>
            <ol>
                <li>Larry</li>
                <li>Moe</li>
                <li>Curly</li>
            </ol>
            <p>
                This is an ordered list with long content:
            </p>
            <ol>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam libero esse suscipit iste voluptatem reprehenderit accusamus voluptate ipsum perferendis. Maiores adipisci ad possimus corporis incidunt voluptate. Adipisci, accusamus a.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, molestiae velit? Doloribus quidem magnam architecto quia id molestiae ipsum exercitationem aperiam, asperiores eos optio porro natus, quam ducimus odio ipsa.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat obcaecati, soluta reiciendis deleniti cum illum voluptates tempore iure a, recusandae dolorum culpa! Ut ipsum rerum aut in inventore! Dolorum, rem.
                Consequuntur laudantium placeat eos eveniet tempore exercitationem illo distinctio, ea illum nam iste! Fugiat hic, iste est accusamus porro eos inventore ex tempora. Animi veniam reprehenderit inventore iste facilis? Cumque?
                Neque nisi vero numquam nostrum, explicabo exercitationem facilis nobis optio officiis minus quasi mollitia distinctio ipsum? Vero, eius! Unde eum facere dicta perspiciatis eos corrupti quam vel perferendis autem labore.
                Nobis cupiditate, reiciendis dolores optio, incidunt aut, earum consequatur ab iure fugiat exercitationem ex inventore provident assumenda delectus dolore iusto distinctio eum veniam autem tempore hic? Hic a fuga totam.
                Velit, laudantium ab quis mollitia possimus nesciunt, veniam nisi temporibus quia deleniti facilis distinctio. Animi amet nobis labore. Sapiente ut inventore ducimus doloribus veritatis et quae. Voluptates accusamus sit atque.
                Aliquid ea provident fugiat, aut odio reprehenderit eligendi Pariatur amet saepe magnam? Eligendi ducimus hic voluptatem et consequatur ea facere. Officiis consequatur, incidunt pariatur eveniet vitae nemo quibusdam sint.</li>
            </ol>
            <p>
                This is a definition list:
            </p>
            <dl>
                <dt>Defintion Term</dt>
                <dd>Definition data defining the previous term</dd>
                <dt>Another Definition Term</dt>
                <dd>Definition data defining the previous term</dd>
            </dl>
        </section>
        <section>
            <p>
                This is an address with breaks:
            </p>
            <address>
                John Q. Public
                <br>123 Main Street
                <br>Anywhere, ST 12345
            </address>
            <p>
                This is a long quotation inside a blockquote:
            </p>
            <blockquote>
                <p>
                    “I love songs about horses, railroads, land, judgement day, family, hard times, whiskey, courtship, marriage, adultery, separation, murder, war, prison, rambling, damnation, home, salvation, death, pride, humor, piety, rebellion, patriotism, larceny, determination, tragedy, rowdiness, heartbreak, and love. And Mother. And God.” ~ Johnny Cash
                </p>
            </blockquote>
            <p>
                This is pre-formatted:
            </p>
            <pre>
                Start in column one.
                Then indent to column ten.
                Then back five spaces.
            </pre>
        </section>
        <section>
            <p>
                Here's a table with a border, a caption, colgroups, cols, thead, tfoot, & tbody:
            </p>
            <table border="1">
                <caption>This is a table caption, made with caption</caption>
                <colgroup span="2">
                    <col>
                    <col>
                </colgroup>
                <colgroup></colgroup>
                <thead>
                    <tr>
                        <th>Table Header 1</th>
                        <th>Table Header 2</th>
                        <th><a href="/">Table Link</a></th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td>Table Footer 1</td>
                        <td>Table Footer 2</td>
                        <td>Table Footer 3</td>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td>TD 1.1</td>
                        <td>TD 1.2</td>
                        <td>TD 1.3</td>
                    </tr>
                    <tr>
                        <td>TD 2.1</td>
                        <td>TD 2.2</td>
                        <td>TD 2.3</td>
                    </tr>
                    <tr>
                        <td>TD 3.1</td>
                        <td>TD 3.2</td>
                        <td>TD 3.3</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</div>

<style lang="scss">
    .pageContentWrap {
        padding: 1vw;
        background: var(--theme-background);
        section {
            background-color: var(--theme-surface);
            color: var(--theme-on-surface);
            padding: 4vw;
            margin: 4vw;
        }
        .colorPalette {
            .gridWrap {
                display: grid;
                grid-gap: 1rem;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                .colorBlock {
                    display: grid;
                    grid-template-rows: repeat(8, 4em);
                    div {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
                .primary {
                    .shade1 {
                        background: hsl(var(--primaryColor) var(--l-10));
                        color: hsl(var(--primaryColor) var(--l-40));
                    }
                    .shade2 {
                        background: hsl(var(--primaryColor) var(--l-20));
                        color: hsl(var(--primaryColor) var(--l-50));
                    }
                    .shade3 {
                        background: hsl(var(--primaryColor) var(--l-30));
                        color: hsl(var(--primaryColor) var(--l-50));
                    }
                    .shade4 {
                        background: hsl(var(--primaryColor) var(--l-40));
                        color: hsl(var(--primaryColor) var(--l-80));
                    }
                    .shade5 {
                        background: hsl(var(--primaryColor) var(--l-50));
                        color: hsl(var(--primaryColor) var(--l-10));
                    }
                    .shade8 {
                        background: hsl(var(--primaryColor) var(--l-80));
                        color: hsl(var(--primaryColor) var(--l-20));
                    }
                    .shade9 {
                        background: hsl(var(--primaryColor) var(--l-90));
                        color: hsl(var(--primaryColor) var(--l-30));
                    }
                    .shade10 {
                        background: hsl(var(--primaryColor) var(--l-100));
                        color: hsl(var(--primaryColor) var(--l-10));
                    }
                }
                .accent {
                    background-color: hsl(var(--accentColor) 54%);
                }
                .neutralLight {
                    background-color: hsl(var(--neutralColorLight) 88%);
                }
                .neutralDark {
                    background-color: hsl(var(--neutralColorDark) 17%);
                }
            }
        }
    }
</style>