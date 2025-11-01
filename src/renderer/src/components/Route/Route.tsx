import { createRoute, Outlet } from "@tanstack/react-router";
import App from "../../App";
import Onboarding from "../Onboarding/Onboarding";
import { rootRoute } from "./RootRoute";

export const PathLessLayoutComponent = () => {
	return (
		<App>
			<Outlet />
		</App>
	);
};

const pathlessLayoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: PathLessLayoutComponent,
});

const onboardingRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/onboarding",
	component: Onboarding, // The layout component
});

// const ipkNameRoute = createRoute({
//   getParentRoute: () => postsRoute,
//   path: 'create',
// })

export const routeTree = rootRoute.addChildren([
	// The pathless layout route has no path, only an id
	// So its children will be nested under the pathless layout route
	pathlessLayoutRoute.addChildren([onboardingRoute]),
]);
