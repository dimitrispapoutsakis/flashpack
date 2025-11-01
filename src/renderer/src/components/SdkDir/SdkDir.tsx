import { useEffect } from "react";
import { useUiStore } from "@/renderer/src/store/uiStore";
import Input from "../Input/Input";

const SdkDir = () => {
	const setUi = useUiStore((state) => state.setUi);
	const sdkDir = useUiStore((state) => state.sdkDir);

	useEffect(() => {
		setUi("nextButtonDisabled", sdkDir.length === 0);
	}, [setUi, sdkDir]);

	return (
		<div>
			<Input
				placeholder="Sdk Directory"
				value={sdkDir}
				onChange={(e) => setUi("sdkDir", e.target.value)}
			/>
		</div>
	);
};

export default SdkDir;
