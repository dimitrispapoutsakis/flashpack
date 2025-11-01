import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { FILE_EXCLUDES } from "../constants/flashpack";

interface IUiState {
	selectedPlayer: string;
	setSelectedPlayer: (player: string | null) => void;
	hasOnboarded: boolean;
	setHasOnboarded: (hasOnboarded: boolean) => void;
	ipkName: string;
	ipkDir: string;
	sdkDir: string;
	fileExcludes: string[];
	appId: string;
	nextButtonDisabled: boolean;
	setUi: (key: TAppSettings, value: any) => void;
}

type TAppSettings = keyof IUiState;

export const useUiStore = create<IUiState>()(
	persist(
		(set) => ({
			selectedPlayer: "Select Device",
			hasOnboarded: false,
			ipkName: "a.ipk",
			ipkDir: "",
			sdkDir: "",
			appId: "com.lg.app.signage.dev",
			nextButtonDisabled: false,
			fileExcludes: FILE_EXCLUDES,
			setSelectedPlayer: (player) =>
				set({ selectedPlayer: player ?? "Select Device" }),
			setHasOnboarded: (hasOnboarded) => set({ hasOnboarded }),
			setUi: (key: TAppSettings, value: any) => set({ [key]: value }),
		}),
		{
			name: "ui-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
