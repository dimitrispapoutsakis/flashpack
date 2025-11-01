import { electronApp, is, optimizer } from "@electron-toolkit/utils";
import { spawn } from "child_process";
import { app, BrowserWindow, dialog, ipcMain, shell } from "electron";
import fs from "fs";
import { readdir } from "fs/promises";
import { homedir } from "os";
import path, { join, resolve } from "path";
import icon from "../../resources/icon.png?asset";

//  import { Installer } from "@webos-tools/cli/APIs";
// console.log(Installer);
function createWindow(): void {
	/* 	Installer.list().then((res) => {
			console.log(res);
		});  */
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1115,
		height: 850,
		show: false,
		autoHideMenuBar: true,
		frame: false,
		...(process.platform === "linux" ? { icon } : {}),
		webPreferences: {
			preload: join(__dirname, "../preload/index.js"),
			sandbox: false,
			contextIsolation: true,
		},
		title: "FlashPack",
	});

	// mainWindow.title = 'Electron-Rsbuild app'
	mainWindow.on("ready-to-show", () => {
		mainWindow.show();
	});

	mainWindow.webContents.setWindowOpenHandler((details) => {
		shell.openExternal(details.url);
		return { action: "deny" };
	});

	// HMR for renderer base on electron-rsbuild cli.
	// Load the remote URL for development or the local html file for production.
	if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
		mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
	} else {
		mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
	}
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	// Set app user model id for windows
	electronApp.setAppUserModelId("com.electron");

	// Default open or close DevTools by F12 in development
	// and ignore CommandOrControl + R in production.
	// see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
	app.on("browser-window-created", (_, window) => {
		optimizer.watchWindowShortcuts(window);
	});

	// IPC test
	ipcMain.on("ping", (event) => {
		event.reply("pong", { message: "copy that.", time: new Date().getTime() });
		console.log("pong");
	});

	// Window controls
	ipcMain.on("window-minimize", (event) => {
		const window = BrowserWindow.fromWebContents(event.sender);
		console.log(window, "here");
		window?.minimize();
	});

	ipcMain.on("window-maximize", (event) => {
		const window = BrowserWindow.fromWebContents(event.sender);
		if (window?.isMaximized()) {
			window.unmaximize();
		} else {
			window?.maximize();
		}
	});

	ipcMain.on("window-close", (event) => {
		const window = BrowserWindow.fromWebContents(event.sender);
		window?.close();
	});

	// OS utilities
	ipcMain.handle("get-home-dir", () => {
		return homedir();
	});

	ipcMain.handle("get-hard-drive-dir", () => {
		return readdir(homedir());
	});

	ipcMain.handle("get-webos-ipk-dir", () => {
		return join(homedir(), "dev", "webos", "ipks");
	});

	ipcMain.handle("get-webos-sdk-dir", () => {
		const projectRoot = resolve(__dirname, "../..");
		const NODE_MODULES_DIR = `${join(projectRoot, "node_modules")}/`;
		const WEBOS_CLI_DIR = `${NODE_MODULES_DIR}@webos-tools/cli/bin/`;
		return WEBOS_CLI_DIR;
	});

	ipcMain.handle("upgrade-webos", async (event, deviceName: string) => {
		try {
			// Get UI store values from renderer
			const uiStore = await event.sender.executeJavaScript(`
				(() => {
					const stored = localStorage.getItem('ui-storage');
					return stored ? JSON.parse(stored) : null;
				})()
			`);

			const storeState = uiStore?.state || {};
			const ipkName = storeState.ipkName || "a.ipk";
			const ipkDir = storeState.ipkDir || "";
			const sdkDir = storeState.sdkDir || "";

			if (!ipkDir || !deviceName) {
				throw new Error("IPK directory and device name are required");
			}

			const ipkPath = join(ipkDir, ipkName);

			// Run ares-install command
			return new Promise((resolve, reject) => {
				const aresInstall = spawn("ares-install", [
					"--device",
					deviceName,
					ipkPath,
				]);

				let output = "";
				let errorOutput = "";

				aresInstall.stdout.on("data", (data) => {
					output += data.toString();
					console.log(data.toString());
				});

				aresInstall.stderr.on("data", (data) => {
					errorOutput += data.toString();
					console.error(data.toString());
				});

				aresInstall.on("close", (code) => {
					if (code === 0) {
						resolve({ success: true, output, deviceName });
					} else {
						reject({
							success: false,
							error: errorOutput || "Installation failed",
							code,
						});
					}
				});

				aresInstall.on("error", (error) => {
					reject({ success: false, error: error.message });
				});
			});
		} catch (error) {
			console.error("Error upgrading WebOS:", error);
			throw error;
		}
	});

	// Dialog handlers
	ipcMain.handle("show-open-dialog", async (event, options) => {
		const window = BrowserWindow.fromWebContents(event.sender);
		if (!window) {
			throw new Error("Window not found");
		}
		const result = await dialog.showOpenDialog(window, options);
		return result;
	});

	createWindow();

	app.on("activate", () => {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
