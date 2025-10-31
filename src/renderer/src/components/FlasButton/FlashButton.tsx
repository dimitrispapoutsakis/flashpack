import { boxShadow, primary } from "@/constants/css";
import BoltIcon from "@/renderer/src/components/Icons/icon/Bolt";
import Icon from "@/renderer/src/components/Icons/icon/Icon";

const FlashButton = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<Icon
				title="Flash"
				className="p-4"
				style={{
					cursor: "pointer",
					alignSelf: "flex-end",
					border: `1px solid ${primary}`,
					width: "fit-content",
					borderRadius: "50%",
					boxShadow,
				}}
			>
				<BoltIcon />
			</Icon>
			<h1>Flash!</h1>
		</div>
	);
};

export default FlashButton;
