import { useState } from "react";
import { cn } from "@/lib/utils";
import type { IRestProps } from "@/typings";
import styles from "./Input.module.scss";

interface IInput extends IRestProps {
	placeholder?: string;
	value?: string;
}

const Input = ({ placeholder = "", value = "", ...rest }: IInput) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className="d-flex flex-col relative" {...rest}>
			<input
				className={styles.root}
				placeholder={placeholder}
				value={value}
				onFocus={() => setIsActive(true)}
				onBlur={() => setIsActive(false)}
			/>
			<div className={cn(styles.line, isActive && styles.lineActive)} />
		</div>
	);
};

Input.displayName = "Input";

export default Input;
