import { electronAPI } from "@electron-toolkit/preload";
import { spawn } from "child_process";
import { contextBridge } from "electron";

// Custom APIs for renderer
const api = {
	window: {
		minimize: () => electronAPI.ipcRenderer.send("window-minimize"),
		maximize: () => electronAPI.ipcRenderer.send("window-maximize"),
		close: () => electronAPI.ipcRenderer.send("window-close"),
	},
	os: {
		getHomeDir: () => electronAPI.ipcRenderer.invoke("get-home-dir"),
		getHardDriveDir: () => electronAPI.ipcRenderer.invoke("get-hard-drive-dir"),
		getWebOsSDKDir: () => electronAPI.ipcRenderer.invoke("get-webos-sdk-dir"),
		getWebOsIPKDir: () => electronAPI.ipcRenderer.invoke("get-webos-ipk-dir"),
	},
	system: {
		createEnv: (env: any) => electronAPI.ipcRenderer.invoke("create-env", env),
	},
	dialog: {
		showOpenDialog: (options: Electron.OpenDialogOptions) =>
			electronAPI.ipcRenderer.invoke("show-open-dialog", options),
	},
	cli: {
		getDevices: () => {
			const aresCliCmd = spawn("ares-setup-device", ["--list"]);
			const excludedDevices = ["name", "------------------", "emulator", ""];
			let devices: any[] = [];
			return new Promise((resolve, reject) => {
				aresCliCmd.stdout.on("data", (data) => {
					console.log(data.toString());
					devices = data
						.toString()
						.split("\n")
						.map((line) => line.trim())
						.map((device) => {
							return {
								name: device.split(" ")[0],
								deviceInfo: device.split(" ")[3],
								ssh: device.split(" ")[5],
							};
						})
						.filter((device) => !excludedDevices.includes(device.name));
					resolve(devices);
				});
			});
		},
		upgradeWebos: (deviceName: string) =>
			electronAPI.ipcRenderer.invoke("upgrade-webos", deviceName),
	},
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
	try {
		contextBridge.exposeInMainWorld("electron", electronAPI);
		contextBridge.exposeInMainWorld("api", api);
	} catch (error) {
		console.error(error);
	}
} else {
	// @ts-expect-error (define in dts)
	window.electron = electronAPI;
	// @ts-expect-error (define in dts)
	window.api = api;
}
