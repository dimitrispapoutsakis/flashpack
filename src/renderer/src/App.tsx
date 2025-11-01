import { useEffect } from "react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import Particles from "@/components/Particles/Particles";
import { borderRadius, boxShadow, primary } from "@/constants/css";
import { layouLevel } from "@/constants/layout";
import type { IChildren } from "@/typings";
import Devices from "./components/Devices/Devices";
import FlashButton from "./components/FlasButton/FlashButton";
import Onboarding from "./components/Onboarding/Onboarding";
import { TitleBar } from "./components/TitleBar";
import { useUiStore } from "./store/uiStore";

const App = ({ children }: IChildren) => {
	const hasOnboarded = useUiStore((state) => state.hasOnboarded);

	return (
		<>
			<Particles />
			<div className="flex flex-col h-screen bg-background">
				<TitleBar />
				{!hasOnboarded ? (
					<>
						<Onboarding />
						{children}
					</>
				) : (
					<>
						<Devices />
						<div
							className="flex-0 flex flex-row w-[50%] self-center m-10 px-8 py-8 bg-secondary justify-center items-center"
							style={{
								boxShadow,
								zIndex: layouLevel.default,
								borderRadius,
							}}
						>
							<FlashButton />
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default App;
