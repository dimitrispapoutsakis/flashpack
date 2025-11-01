import { cn } from "@/lib/utils";
import styles from "./Title.module.scss";

interface ITitle {
	title: string;
}

const Title = ({ title }: ITitle) => {
	return (
		<div className="flex flex-row ml-4">
			<span className={cn(styles.bracket, "text-4xl")}>[</span>
			<span className={cn(styles.text, "text-4xl font-bold")}>{title}</span>
			<span className={cn(styles.bracket, "text-4xl")}>]</span>
		</div>
	);
};

export default Title;
