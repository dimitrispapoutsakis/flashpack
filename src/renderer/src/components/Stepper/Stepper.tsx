import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { routes } from "@/renderer/src/constants/routes";
import styles from "./Stepper.module.scss";

const Stepper = () => {
	const [currentStep, setCurrentStep] = useState(0);

	useEffect(() => {
		setCurrentStep(
			routes.findIndex((route) => route.path === window.location.pathname),
		);
	}, []);

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-row justify-center items-center">
				{routes.map((route) => {
					const isActive =
						currentStep === routes.findIndex((r) => r.path === route.path);
					return (
						<div
							key={`route-${route.name}`}
							className={cn(styles.stepItem, "mr-4")}
						>
							<div
								className={cn(styles.stepItemCircle, isActive && styles.active)}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Stepper;
