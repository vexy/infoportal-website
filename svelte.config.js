import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// use Vercel platform adapter
		adapter: adapter(),

		// custom aliases
		alias: {
			$models: "src/models",
			$styles: "src/styles"
		}
	}
};

export default config;
