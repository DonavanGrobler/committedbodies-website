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
    <span class="toggle"></span>
  </label>
  
  <label class="lightRadio">
    <input type=radio bind:group={theme} name="theme" value={"light"}>
    <span class="toggle"></span>
  </label>
</div>

<style lang="scss">
  .themeSwitcher {
    position: relative;
    display: flex;
    width: 80px;
    height: 30px;
    border-radius: 30px;
    overflow: hidden;
    background-color: hsl(var(--primaryHS) var(--primaryL));
    &.dark {
      border: 1px solid green;
      .lightRadio {
        .toggle {
          display: none;
        }
      }
    }
    &.light {
      border: 1px solid green;
      .darkRadio {
        .toggle {
          display: none;
        }
      }
    }
    &.light {
      border: 1px solid blue;
    }
    .toggle {
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: red;
      // z-index: 2;
    }
    label {
      cursor: pointer;
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        visibility: hidden;
      }
      &.darkRadio {
        background-color: black;
      }
      &.lightRadio {
        background-color: white;
      }
    }
  }
</style>