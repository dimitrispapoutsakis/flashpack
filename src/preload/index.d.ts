import { ElectronAPI } from "@electron-toolkit/preload";
import { Installer } from "@webos-tools/cli/APIs";

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
		};
	}
}
