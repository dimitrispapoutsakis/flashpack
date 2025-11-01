import { useEffect, useState } from "react";
import { borderRadius, boxShadow } from "@/constants/css";
import { layouLevel } from "@/constants/layout";
import Title from "../Title/Title";
import Device from "./Device";

const Devices = () => {
	const [devices, setDevices] = useState<any[]>([]);

	useEffect(() => {
		window.api.cli.getDevices().then((_devices) => {
			console.log(_devices);
			setDevices(_devices);
		});
	}, []);

	return (
		<div
			className="flex flex-col bg-secondary flex-1 m-15 justify-center items-center flex-wrap gap-4 p-5"
			style={{ boxShadow, borderRadius, zIndex: layouLevel.default }}
		>
			<div className="flex flex-row">{/* <Title /> */}</div>

			<div className="flex flex-row">
				{devices.map((device, index) => (
					<Device
						key={`${device.address}-${index}`}
						device={device}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Devices;
