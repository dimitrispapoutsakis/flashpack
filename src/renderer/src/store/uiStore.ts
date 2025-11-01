import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUiState {
	selectedPlayer: string;
	setSelectedPlayer: (player: string | null) => void;
	hasOnboarded: boolean;
	setHasOnboarded: (hasOnboarded: boolean) => void;
	ipkName: string;
	setUi: (key: TAppSettings, value: any) => void;
}

type TAppSettings = keyof IUiState;

export const useUiStore = create<IUiState>()(
	persist(
		(set) => ({
			selectedPlayer: "Select Device",
			hasOnboarded: false,
			ipkName: "a.ipk",
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
