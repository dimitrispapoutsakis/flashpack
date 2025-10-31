import { defaultIconSize } from "@/renderer/src/constants/components";
import type { IChildren, IRestProps } from "@/typings";

interface IIconProps extends IChildren, IRestProps {
	title?: string;
	width?: number;
	height?: number;
}

const Icon = ({
	children,
	title,
	width = defaultIconSize,
	height = defaultIconSize,
	...props
}: IIconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			{...props}
			role="img"
			viewBox="0 0 430 430"
		>
			<title>{title}</title>
			{children}
		</svg>
	);
};

export default Icon;
