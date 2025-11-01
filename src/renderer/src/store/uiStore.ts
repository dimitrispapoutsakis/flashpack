import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUiState {
	selectedPlayer: string;
	setSelectedPlayer: (player: string | null) => void;
	hasOnboarded: boolean;
	setHasOnboarded: (hasOnboarded: boolean) => void;
}

export const useUiStore = create<IUiState>()(
	persist(
		(set) => ({
			selectedPlayer: "Select Device",
			hasOnboarded: false,
			setSelectedPlayer: (player) =>
				set({ selectedPlayer: player ?? "Select Device" }),
			setHasOnboarded: (hasOnboarded) => set({ hasOnboarded }),
		}),
		{
			name: "ui-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
