import { useState } from "react";
import { cn } from "@/lib/utils";
import type { IRestProps } from "@/typings";
import styles from "./Input.module.scss";

interface IInput extends IRestProps {
	placeholder?: string;
	value?: string;
}

const Input = ({
	placeholder = "",
	value = "",
	className,
	onClick,
	onChange,
	...rest
}: IInput) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className={cn("d-flex flex-col relative", className)} {...rest}>
			<input
				className={styles.root}
				placeholder={placeholder}
				value={value}
				onClick={onClick}
				onChange={onChange}
				onFocus={() => setIsActive(true)}
				onBlur={() => setIsActive(false)}
			/>
			<div className={cn(styles.line, isActive && styles.lineActive)} />
		</div>
	);
};

Input.displayName = "Input";

export default Input;
