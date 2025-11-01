import { useCallback, useEffect, useMemo } from "react";
import { borderRadius, boxShadow } from "@/constants/css";
import { layouLevel } from "@/constants/layout";
import { useUiStore } from "@/renderer/src/store/uiStore";
import FadeIn from "../Animations/FadeIn";
import Devices from "../Devices/Devices";
import FlashButton from "../FlasButton/FlashButton";

const Dashboard = () => {
	return (
		<FadeIn>
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
		</FadeIn>
	);
};

export default Dashboard;
