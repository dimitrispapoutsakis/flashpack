import { useEffect } from "react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import Particles from "@/components/Particles/Particles";
import { TitleBar } from "./components/TitleBar";

const App = () => {
	return (
		<>
			<Particles />
			<div className="flex flex-col h-screen bg-background">
				<TitleBar />
				<div className="flex-1 flex justify-center items-center">
					<Button>Flash</Button>
				</div>
			</div>
		</>
	);
};

export default App;
