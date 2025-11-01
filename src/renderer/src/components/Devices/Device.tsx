import { useCallback, useState } from "react";
import Ink from "react-ink";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/renderer/src/store/uiStore";
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
	const selectedPlayer = useUiStore((state) => state.selectedPlayer);
	const setSelectedPlayer = useUiStore((state) => state.setSelectedPlayer);
	const isSelected = selectedPlayer === device.name;
	const uiStorage = JSON.parse(localStorage.getItem("ui-storage") || "{}");

	const className = cn(
		"flex flex-col items-center justify-center bg-background p-4 flex-wrap m-3",
		styles.root,
		isSelected && styles.active,
	);

	const onPointerDown = () => {
		setSelectedPlayer(device.name);
		window.api.cli.upgradeWebos(uiStorage);
	};

	return (
		<div className={className} {...rest} onPointerDown={onPointerDown}>
			<Icon>
				<SmartTvIcon />
			</Icon>
			<span>{device.name}</span>
			<Ink />
		</div>
	);
};

export default Device;
