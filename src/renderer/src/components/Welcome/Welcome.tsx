import { useEffect } from "react";
import { useUiStore } from "../../store/uiStore";
import Blockquote from "../Blockquote/Blockquote";

const Welcome = () => {
	const setUi = useUiStore((state) => state.setUi);

	useEffect(() => {
		setUi("nextButtonDisabled", false);
	}, [setUi]);

	return (
		<Blockquote>
			Welcome to the installation wizard, we'll get you onboarded in no time!
		</Blockquote>
	);
};

export default Welcome;
