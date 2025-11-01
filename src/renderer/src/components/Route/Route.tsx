import { createRoute, Outlet } from "@tanstack/react-router";
import App from "../../App";
import OnBoarding from "../Onboarding/Onboarding";
import { rootRoute } from "./RootRoute";

export const LayoutRoute = () => {
	return (
		<App>
			<Outlet />
		</App>
	);
};

const onboardingRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: OnBoarding, // The layout component
});

// const ipkNameRoute = createRoute({
//   getParentRoute: () => postsRoute,
//   path: 'create',
// })

export const routeTree = rootRoute.addChildren([onboardingRoute]);
