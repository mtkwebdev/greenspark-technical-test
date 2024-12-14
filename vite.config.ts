import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": new URL("./src/", import.meta.url).pathname,
			"@assets": new URL("./src/assets/", import.meta.url).pathname,
			"@components": new URL("./src/components/", import.meta.url).pathname,
			"@features": new URL("./src/features/", import.meta.url).pathname,
			"@store": new URL("./src/store/", import.meta.url).pathname,
			"@services": new URL("./src/services/", import.meta.url).pathname,
		},
	},
});
