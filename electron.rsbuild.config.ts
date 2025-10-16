import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { resolve } from "path";

export default defineConfig({
	root: resolve(__dirname, "."),
	environments: {
		// main
		main: {},
		// preload
		preload: {},
		// renderer
		renderer: {
			plugins: [pluginReact()],
		},
	},
});
