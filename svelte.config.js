import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        adapter: adapter()
	},

    preprocess: [
        preprocess({
            scss: {  prependData: `@import 'src/styles/theme-variables.scss';`},
        }),
        mdsvex(mdsvexConfig)
    ]
};

export default config;
