import type { IChildren } from "@/typings";

const Blockquote = ({ children }: IChildren) => {
	return (
		<blockquote className="border-l-4 border-primary bg-grey-800 pl-4 pr-2 py-3 italic rounded">
			{children}
		</blockquote>
	);
};

export default Blockquote;
