import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./Title.module.scss";

interface ITitle {
	title: string;
}

const Title = ({ title }: ITitle) => {
	return (
		<>
			<motion.span
				layout
				className={cn(styles.bracket, "text-4xl")}
				initial={{ translateX: -50 }}
				animate={{ translateX: 0 }}
				transition={{ duration: 0.25 }}
			>
				[
			</motion.span>
			<motion.div
				layout
				key={title}
				initial={{ scale: 0.8 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.25 }}
			>
				<span className={cn(styles.text, "text-4xl font-bold")}>{title}</span>
			</motion.div>
			<motion.span
				layout
				className={cn(styles.bracket, "text-4xl")}
				initial={{ translateX: -50 }}
				animate={{ translateX: 0 }}
				transition={{ duration: 0.25 }}
			>
				]
			</motion.span>
		</>
	);
};

export default Title;
