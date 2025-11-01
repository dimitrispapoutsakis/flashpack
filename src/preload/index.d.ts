import type { ElectronAPI } from "@electron-toolkit/preload";
import type { Installer } from "@webos-tools/cli/APIs";
import type { OpenDialogOptions, OpenDialogReturnValue } from "electron";

declare global {
	interface Window {
		electron: ElectronAPI;
		api: {
			cli: {
				Installer: ReturnType<typeof Installer>;
			};
			window: {
				minimize: () => void;
				maximize: () => void;
				close: () => void;
			};
			os: {
				getHomeDir: () => Promise<string>;
				getHardDriveDir: () => Promise<string[]>;
				getWebOsIPKDir: () => Promise<string[]>;
				getWebOsSDKDir: () => Promise<string[]>;
			};
			dialog: {
				showOpenDialog: (
					options: OpenDialogOptions,
				) => Promise<OpenDialogReturnValue>;
			};
		};
	}
}
