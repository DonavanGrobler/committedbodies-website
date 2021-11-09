<script>
    import Header from '$lib/components/ui-elements/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>

<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header>CONTACT</Header>
    <div class="contentWrap">
        <h2>How can we help?</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quisquam repudiandae similique assumenda at. Laudantium, quaerat aliquid distinctio nesciunt, fugiat mollitia commodi, illum rerum veritatis nihil cumque eum hic voluptate!</p>
        <p>Perferendis facere numquam assumenda ipsam, modi, quam eum vel nobis iure fugit blanditiis, autem architecto. Quisquam asperiores consectetur aspernatur, porro perspiciatis quidem! Maiores eligendi ad repellendus quas eius. Dolor, ipsum?</p>
        <form name="contact" method="POST" data-netlify="true">
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                </select></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    </div>
</div>

<style lang="scss">
    .contentWrap {
        padding: $space4;
        background-color: $neutral1;
        form {
            margin-top: $space4;
            background-color: #ffffff;
            padding: $space3;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
    }
</style>