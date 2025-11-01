import { Maximize2, Minimize2, X } from "lucide-react";

export const TitleBar = () => {
	return (
		<div
			className="h-8 bg-secondary border-b border-border flex items-center justify-between px-2 select-none drag-region"
			style={{
				// @ts-expect-error
				WebkitAppRegion: "drag" as const,
			}}
		>
			<div className="flex text-aqua-500  items-center gap-2 text-sm font-medium text-foreground px-2">
				<span>FlashPack</span>
			</div>

			<div
				className="flex items-center no-drag"
				style={{
					// @ts-expect-error
					WebkitAppRegion: "no-drag" as const,
				}}
			>
				<button
					onClick={() => window.api.window.minimize()}
					className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors rounded-sm"
					title="Minimize"
					type="button"
				>
					<Minimize2 className="w-4 h-4" />
				</button>
				<button
					onClick={() => window.api.window.maximize()}
					className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors rounded-sm"
					title="Maximize"
					type="button"
				>
					<Maximize2 className="w-4 h-4" />
				</button>
				<button
					onClick={() => window.api.window.close()}
					className="w-8 h-8 flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors rounded-sm"
					title="Close"
					type="button"
				>
					<X className="w-4 h-4" />
				</button>
			</div>
		</div>
	);
};
