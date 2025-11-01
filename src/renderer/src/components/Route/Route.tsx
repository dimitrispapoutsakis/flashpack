import { createRoute, Outlet } from "@tanstack/react-router";
import App from "../../App";
import IpkName from "../IpkName/IpkName";
import Onboarding from "../Onboarding/Onboarding";
import SdkDir from "../SdkDir/SdkDir";
import Welcome from "../Welcome/Welcome";
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
	id: "pathlessLayoutRoute",
	component: PathLessLayoutComponent,
});

const welcomeRoute = createRoute({
	getParentRoute: () => pathlessLayoutRoute,
	path: "/",
	component: Welcome,
});

const ipkNameRoute = createRoute({
	getParentRoute: () => pathlessLayoutRoute,
	path: "/ipk-name",
	component: IpkName, // The layout component
});

const sdkDirRoute = createRoute({
	getParentRoute: () => pathlessLayoutRoute,
	path: "/sdk-dir",
	component: SdkDir, // The layout component
});

export const routeTree = rootRoute.addChildren([
	// The pathless layout route has no path, only an id
	// So its children will be nested under the pathless layout route
	pathlessLayoutRoute.addChildren([welcomeRoute, ipkNameRoute, sdkDirRoute]),
]);
