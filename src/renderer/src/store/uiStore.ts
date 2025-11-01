import { create } from "zustand";

interface IUiState {
	selectedPlayer: string;
	setSelectedPlayer: (player: string | null) => void;
}

export const useUiStore = create<IUiState>((set) => ({
	selectedPlayer: "Select Device",
	setSelectedPlayer: (player) => set({ selectedPlayer: player }),
}));
