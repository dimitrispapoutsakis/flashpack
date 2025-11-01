import { Link, useLocation } from "@tanstack/react-router";
import clamp from "clamp";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { cn } from "@/lib/utils";
import type { IChildren } from "@/typings";
import { routes } from "../../constants/routes";
import Paper from "../Paper/Paper";
import Stepper from "../Stepper/Stepper";
import Title from "../Title/Title";

const OnBoarding = ({ children }: IChildren) => {
	const location = useLocation();
	const currentRouteIndex = routes.findIndex(
		(route) => route.path === location.pathname,
	);

	const currentRoute = routes[currentRouteIndex];
	const isFirstRoute = currentRouteIndex === 0;
	const isLastRoute = currentRouteIndex === routes.length - 1;
	const prevRoute = routes[currentRouteIndex > 0 ? currentRouteIndex - 1 : 0];
	const nextRoute = routes[currentRouteIndex + 1];
	const prevButtonClass = cn(
		"justify-start align-start",
		isFirstRoute ? "opacity-[0.5]" : "opacity-[1]",
	);

	return (
		<div className="flex justify-center flex-col items-center h-screen">
			<Paper className="w-[50%] flex-col self-center ">
				<div className="flex flex-row justify-center items-center">
					<Title title={currentRoute?.title || ""} />
				</div>
				<div className="mt-6 mb-3">
					<Stepper />
				</div>

				<div className="mt-3 mb-6 flex justify-center items-center">
					{children}
				</div>

				<div className="flex flex-row justify-between items-center">
					<div className="flex justify-start align-start">
						<Link
							to={prevRoute?.path || "/"}
							className={prevButtonClass}
							style={{
								filter: isFirstRoute ? "grayscale(100%)" : "grayscale(0%)",
								pointerEvents: isFirstRoute ? "none" : "auto",
							}}
						>
							<Button>Prev</Button>
						</Link>
					</div>

					<div className="flex justify-end align-end">
						<Link to={nextRoute?.path || ""}>
							<Button>Next</Button>
						</Link>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default OnBoarding;
