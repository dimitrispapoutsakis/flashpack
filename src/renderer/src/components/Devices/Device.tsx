import { useState } from "react";
import Ink from "react-ink";
import { cn } from "@/lib/utils";
import type { IRestProps } from "@/typings";
import Icon from "../Icons/icon/Icon";
import SmartTvIcon from "../Icons/icon/SmartTv";
import styles from "./Device.module.scss";

interface IDevice extends IRestProps {
	device: {
		name: string;
		deviceInfo: string;
	};
}

const Device = ({ device, ...rest }: IDevice) => {
	const [selected, setSelected] = useState(false);
	const className = cn(
		"flex flex-col items-center justify-center bg-background p-4 flex-wrap m-3",
		styles.root,
		selected && styles.active,
	);

	const handleClick = (e: React.KeyboardEvent<HTMLDivElement>) => {
		setSelected(!selected);
	};

	return (
		<div className={className} {...rest} onKeyDown={handleClick}>
			<Icon>
				<SmartTvIcon />
			</Icon>
			{/** biome-ignore lint/a11y/noStaticElementInteractions: <explanation> */}
			<span>{device.name}</span>
			<Ink />
		</div>
	);
};

export default Device;
