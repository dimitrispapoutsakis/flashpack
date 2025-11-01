import "./assets/scss/index.scss";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { routeTree } from "./components/Route/Route";

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
