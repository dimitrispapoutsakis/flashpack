import { routes } from "../../constants/routes";
import Paper from "../Paper/Paper";
import Stepper from "../Stepper/Stepper";
import Title from "../Title/Title";

const OnBoarding = () => {
	const currentRoute = routes.find(
		(route) => route.path === window.location.pathname,
	);
	return (
		<div className="flex justify-center flex-col items-center h-screen">
			<Paper className="w-[50%] flex-col self-center justify-center items-center">
				<div className="flex flex-row justify-center items-center">
					<Title title={currentRoute?.title || ""} />
				</div>
				<div className="m-4">
					<Stepper />
				</div>
			</Paper>
		</div>
	);
};

export default OnBoarding;
