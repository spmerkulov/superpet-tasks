import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: 'https://spmerkulov.github.io',
	// Use trailing slash to avoid accidental concatenation when building URLs
	base: '/superpet-tasks/',
	output: 'static',
	build: {
		assets: 'assets'
	}
});
