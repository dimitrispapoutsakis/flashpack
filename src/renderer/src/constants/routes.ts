import type { IRoute } from "@/typings";

export const routes: IRoute[] = [
	{ name: "welcome", title: "Welcome", path: "/" },
	{ name: "ipkName", title: "IPK Name", path: "/ipk-name" },
	{ name: "sdkDir", title: "SDK Directory", path: "/sdk-dir" },
	{ name: "outputDir", title: "Output Directory", path: "/output-dir" },
];
