import { borderRadius, boxShadow } from "@/constants/css";
import { layouLevel } from "@/constants/layout";
import type { IChildren, IClassName } from "@/typings";

const Paper = ({ children, className = "" }: IChildren & IClassName) => {
	return (
		<div
			className={`flex bg-secondary p-5 ${className}`}
			style={{ boxShadow, borderRadius, zIndex: layouLevel.default }}
		>
			{children}
		</div>
	);
};

export default Paper;
