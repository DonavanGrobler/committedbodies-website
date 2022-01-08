var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => Contact
});
var import_index_33f79e25 = __toModule(require("../../../chunks/index-33f79e25.js"));
var import_Header_990c3051 = __toModule(require("../../../chunks/Header-990c3051.js"));
var import_transition_slideFade_fa1f4647 = __toModule(require("../../../chunks/transition-slideFade-fa1f4647.js"));
var import_stores_830b6bde = __toModule(require("../../../chunks/stores-830b6bde.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}.contentWrap.svelte-1mb8jef.svelte-1mb8jef{padding:4rem;background-color:hsl(var(--neutralHS) var(--neutralL))}.contentWrap.svelte-1mb8jef form.svelte-1mb8jef{margin-top:4rem;background-color:#ffffff;padding:2rem;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}",
  map: null
};
const Contact = (0, import_index_33f79e25.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"pageWrap"}">${(0, import_index_33f79e25.v)(import_Header_990c3051.H, "Header").$$render($$result, {}, {}, { default: () => `CONTACT` })}
    <div class="${"contentWrap svelte-1mb8jef"}"><h2>How can we help?</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quisquam repudiandae similique assumenda at. Laudantium, quaerat aliquid distinctio nesciunt, fugiat mollitia commodi, illum rerum veritatis nihil cumque eum hic voluptate!</p>
        <p>Perferendis facere numquam assumenda ipsam, modi, quam eum vel nobis iure fugit blanditiis, autem architecto. Quisquam asperiores consectetur aspernatur, porro perspiciatis quidem! Maiores eligendi ad repellendus quas eius. Dolor, ipsum?</p>
        <form name="${"contact"}" method="${"POST"}" data-netlify="${"true"}" class="${"svelte-1mb8jef"}"><p><label>Your Name: <input type="${"text"}" name="${"name"}"></label></p>
            <p><label>Your Email: <input type="${"email"}" name="${"email"}"></label></p>
            <p><label>Your Role: <select name="${"role[]"}" multiple><option value="${"leader"}">Leader</option><option value="${"follower"}">Follower</option></select></label></p>
            <p><label>Message: <textarea name="${"message"}"></textarea></label></p>
            <p><button type="${"submit"}">Send</button></p></form></div>
</div>`;
});
