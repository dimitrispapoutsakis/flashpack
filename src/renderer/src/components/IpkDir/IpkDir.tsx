import { useEffect } from "react";
import { useUiStore } from "@/renderer/src/store/uiStore";
import Input from "../Input/Input";

const IpkDir = () => {
	const setUi = useUiStore((state) => state.setUi);
	const ipkDir = useUiStore((state) => state.ipkDir);

	useEffect(() => {
		setUi("nextButtonDisabled", ipkDir.length === 0);
	}, [setUi, ipkDir]);

	useEffect(() => {
		window.api.os.getWebOsIPKDir().then((webosSDKDir) => {
			setUi("ipkDir", webosSDKDir);
		});
	}, [setUi]);

	return (
		<div>
			<Input
				placeholder="IPK Directory"
				value={ipkDir}
				onChange={(e) => setUi("ipkDir", e.target.value)}
			/>
		</div>
	);
};

export default IpkDir;
