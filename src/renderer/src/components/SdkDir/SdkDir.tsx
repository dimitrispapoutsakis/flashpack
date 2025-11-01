import { useEffect } from "react";
import { useUiStore } from "@/renderer/src/store/uiStore";
import Input from "../Input/Input";
import UploadForm from "../UploadForm/UploadForm";

const SdkDir = () => {
	const setUi = useUiStore((state) => state.setUi);
	const sdkDir = useUiStore((state) => state.sdkDir);

	useEffect(() => {
		setUi("nextButtonDisabled", sdkDir.length === 0);
	}, [setUi, sdkDir]);

	useEffect(() => {
		if (!sdkDir.length) {
			window.api.os.getWebOsSDKDir().then((webosSDKDir) => {
				setUi("sdkDir", webosSDKDir);
			});
		}
	}, [setUi, sdkDir]);

	return (
		<div>
			<Input
				placeholder="Sdk Directory"
				value={sdkDir}
				onChange={(e) => setUi("sdkDir", e.target.value)}
			/>
			<UploadForm
				value={sdkDir}
				onFolderSelect={(folderPath) => setUi("sdkDir", folderPath)}
			/>
		</div>
	);
};

export default SdkDir;
