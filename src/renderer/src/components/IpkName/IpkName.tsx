import { useEffect } from "react";
import { useUiStore } from "@/renderer/src/store/uiStore";
import Input from "../Input/Input";

const IpkName = () => {
	const setUi = useUiStore((state) => state.setUi);
	const ipkName = useUiStore((state) => state.ipkName);

	useEffect(() => {
		setUi("nextButtonDisabled", ipkName.length === 0);
	}, [setUi, ipkName]);

	return (
		<div>
			<Input
				placeholder="a.ipk"
				value={ipkName}
				onChange={(e) => setUi("ipkName", e.target.value)}
			/>
		</div>
	);
};

export default IpkName;
