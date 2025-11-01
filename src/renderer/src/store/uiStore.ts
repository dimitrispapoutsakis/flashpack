import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUiState {
	selectedPlayer: string;
	setSelectedPlayer: (player: string | null) => void;
}

export const useUiStore = create<IUiState>()(
	persist(
		(set) => ({
			selectedPlayer: "Select Device",
			setSelectedPlayer: (player) =>
				set({ selectedPlayer: player ?? "Select Device" }),
		}),
		{
			name: "ui-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
