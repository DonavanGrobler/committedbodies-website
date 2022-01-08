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
  H: () => Header
});
var import_index_33f79e25 = __toModule(require("./index-33f79e25.js"));
var import_stores_830b6bde = __toModule(require("./stores-830b6bde.js"));
var NavBreadCrumbs_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}.breadcrumbs.svelte-17i0x76.svelte-17i0x76{color:inherit;text-align:center;list-style-type:none;display:flex;align-items:center;justify-content:center;list-style-type:none;padding:0;margin:0}.breadcrumbs.svelte-17i0x76 li.svelte-17i0x76{color:inherit}.breadcrumbs.svelte-17i0x76 li .divider.svelte-17i0x76{padding:0.5rem 0;color:inherit}.breadcrumbs.svelte-17i0x76 li a.svelte-17i0x76{text-decoration:none;color:inherit}.breadcrumbs.svelte-17i0x76 li a.svelte-17i0x76:hover{opacity:0.7}.breadcrumbs.svelte-17i0x76 li .crumb.svelte-17i0x76{padding:0.5rem;text-transform:capitalize}.breadcrumbs.svelte-17i0x76 li:first-of-type .divider.svelte-17i0x76{display:none}.breadcrumbs.svelte-17i0x76 li.youAreHere.svelte-17i0x76{opacity:0.7}",
  map: null
};
const NavBreadCrumbs = (0, import_index_33f79e25.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_33f79e25.a)(import_stores_830b6bde.p, (value) => $page = value);
  let { path = $page.url.pathname } = $$props;
  let { classList } = $$props;
  let paths = path.split("/");
  paths = paths[paths.length - 1] === "" ? paths.slice(0, paths.length - 1) : paths;
  paths = paths[1] === "" ? paths.slice(1) : paths;
  let breadcrumbs = paths.map((path2, index) => {
    var url = paths.slice(0, index + 1).join("/");
    if (index === 0) {
      path2 = "home";
      url = "/";
    }
    return { "title": path2, url };
  });
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.classList === void 0 && $$bindings.classList && classList !== void 0)
    $$bindings.classList(classList);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<ul class="${"breadcrumbs " + (0, import_index_33f79e25.e)(classList) + " svelte-17i0x76"}">${(0, import_index_33f79e25.b)(breadcrumbs, (crumb, i) => `${crumb.url == $page.url.pathname ? `<li class="${"youAreHere svelte-17i0x76"}"><span class="${"divider svelte-17i0x76"}">/</span>
                <span class="${"crumb svelte-17i0x76"}">${(0, import_index_33f79e25.e)(crumb.title)}</span>
            </li>` : `<li class="${"svelte-17i0x76"}"><span class="${"divider svelte-17i0x76"}">/</span>
                <a${(0, import_index_33f79e25.d)("href", crumb.url, 0)} class="${"svelte-17i0x76"}"><span class="${"crumb svelte-17i0x76"}">${(0, import_index_33f79e25.e)(crumb.title)}</span></a>
            </li>`}`)}
</ul>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}header.svelte-ypul4s.svelte-ypul4s{padding-top:200px;position:relative;width:100%;display:flex;justify-content:center;align-items:center;background-image:var(--brandGradient)}header.svelte-ypul4s .titleWrap.svelte-ypul4s{padding-bottom:120px;z-index:3;color:var(--theme-on-primary)}header.svelte-ypul4s .titleWrap h1.svelte-ypul4s{color:var(--theme-on-primary);font-family:"Roboto Condensed", sans-serif;font-weight:900;font-style:normal;text-decoration:none;text-transform:uppercase;letter-spacing:0px;text-align:center;padding:0;margin:0}',
  map: null
};
const Header = (0, import_index_33f79e25.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-ypul4s"}"><div class="${"titleWrap svelte-ypul4s"}"><h1 class="${"titleLarge svelte-ypul4s"}">${slots.default ? slots.default({}) : ``}</h1>
        ${(0, import_index_33f79e25.v)(NavBreadCrumbs, "BreadCrumbs").$$render($$result, { classList: "theme-on-primary" }, {}, {})}</div>
</header>`;
});
