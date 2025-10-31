import { useEffect } from "react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import Particles from "@/components/Particles/Particles";
import { boxShadow, primary } from "@/constants/css";
import FlashButton from "./components/FlasButton/FlashButton";
import { TitleBar } from "./components/TitleBar";

const App = () => {
	return (
		<>
			<Particles />
			<div className="flex flex-col h-screen bg-background ">
				<TitleBar />

				<div
					className="flex-0 flex flex-col px-8 py-8"
					style={{
						alignSelf: "flex-end",
						flexDirection: "row-reverse",
						border: `1px solid ${primary}`,
						width: "fit-content",
						borderRadius: "50%",
					}}
				>
					<FlashButton />
				</div>
			</div>
		</>
	);
};

export default App;
