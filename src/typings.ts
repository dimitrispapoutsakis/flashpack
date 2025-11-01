import type { ReactNode } from "react";

export interface IChildren {
	children?: ReactNode;
}

export interface IClassName {
	className?: string;
}

export interface IRestProps {
	[key: string]: any;
}

export interface IRoute {
	name: string;
	title: string;
	path: string;
}
