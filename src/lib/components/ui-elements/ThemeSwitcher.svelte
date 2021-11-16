<script>
  import { browser } from '$app/env';
  export let theme = 'dark';
  
  function classToggle() {
    var htmlTag = document.querySelector("html");
    console.log('New theme is ', theme);
    if (htmlTag) {
      var currentTheme = htmlTag.classList[0];
      htmlTag.classList.toggle(currentTheme);
      htmlTag.classList.toggle(theme);
    }
  }
  $: if (browser) theme && classToggle(theme);
</script>

<div class="themeSwitcher {theme}">
  <label class="darkRadio">
    <input type=radio bind:group={theme} name="theme" value={"dark"}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <use xlink:href="#moon"></use>
      </svg>
  </label>
  
  <label class="lightRadio">
    <input type=radio bind:group={theme} name="theme" value={"light"}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <use xlink:href="#sun"></use>
      </svg>
  </label>
</div>

<style lang="scss">
  .themeSwitcher {
    position: relative;
    display: flex;
    padding: 3px;
    // background-color: rgba(255,255,255,0.5);
    border-radius: 30px;
    border: 1px solid currentColor;
    label {
      overflow: hidden;
      cursor: pointer;
      width: 23px;
      height: 23px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      input{
        display: none;
      }
      &.darkRadio {
        // background-color: black;
        color: currentColor;
      }
      &.lightRadio {
        // background-color: white;
        color: currentColor;
      }
    }
  }
</style>