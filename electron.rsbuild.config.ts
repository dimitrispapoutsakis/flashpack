import { defineConfig } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { resolve } from "path";

const ReactCompilerConfig = {
	target: "18",
};

export default defineConfig({
	root: resolve(__dirname, "."),
	environments: {
		// main
		main: {},
		// preload
		preload: {},
		// renderer
		renderer: {
			plugins: [
				pluginReact(),
				pluginSass(),
				pluginBabel({
					include: /\.(?:jsx|tsx)$/,
					babelLoaderOptions(opts) {
						opts.plugins?.unshift([
							"babel-plugin-react-compiler",
							ReactCompilerConfig,
						]);
					},
				}),
			],
		},
	},
});
