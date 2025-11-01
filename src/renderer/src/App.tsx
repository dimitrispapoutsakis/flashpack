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
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./components/Animations/FadeIn";
import { useLocation } from "@tanstack/react-router";
import { routes } from "./constants/routes";
import Dashboard from "./components/Dashboard/Dashboard";

const App = ({ children }: IChildren) => {
	const hasOnboarded = useUiStore((state) => state.hasOnboarded);
	const setUi = useUiStore((state) => state.setUi);
	const location = useLocation();
	
/* 	useEffect(() => {
		if (location.pathname === '/dashboard') {
			setUi('hasOnboarded', true);
		}
	}, [hasOnboarded, location.pathname, setUi]); */
	console.log(hasOnboarded, location.pathname);

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
