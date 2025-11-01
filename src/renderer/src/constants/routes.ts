import type { IRoute } from "@/typings";

export const routes: IRoute[] = [
	{ name: "welcome", title: "FlashPack", path: "/" },
	{ name: "ipkName", title: "IPK Name", path: "/ipk-name" },
	{ name: "ipkDirectory", title: "IPK Directory", path: "/ipk-dir" },
	{ name: "sdkDirectory", title: "SDK Directory", path: "/sdk-dir" },
  { name: "dashboard", title: "Dashboard", path: "/dashboard" },
];
