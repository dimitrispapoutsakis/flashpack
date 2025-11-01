import { AnimatePresence } from "framer-motion";
import Particles from "@/components/Particles/Particles";
import type { IChildren } from "@/typings";
import FadeIn from "./components/Animations/FadeIn";
import Dashboard from "./components/Dashboard/Dashboard";
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
				<AnimatePresence>
					{!hasOnboarded ? (
						<FadeIn>
							<Onboarding>{children}</Onboarding>
						</FadeIn>
					) : (
						<Dashboard />
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default App;
