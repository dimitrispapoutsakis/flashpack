import { primary } from "@/constants/css";

/* Particles... */
export const getParticlesConfig = (
	speed: number = 5,
	size: number = 5,
	opacity: number = 0.8,
) => ({
	particles: {
		number: {
			value: 50,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: primary,
		},
		shape: {
			type: "circle",
		},
		opacity: {
			value: opacity,
			random: true,
		},
		size: {
			value: size,
			random: true,
		},
		links: {
			enable: false,
		},
		move: {
			enable: true,
			speed: speed,
			direction: "none" as const,
			random: true,
			outModes: {
				default: "out" as const,
			},
			bounce: false,
		},
	},
	interactivity: {
		detectOn: "canvas",
		events: {
			onHover: {
				enable: false,
			},
			onClick: {
				enable: false,
			},
			resize: true,
		},
	},
	retinaDetect: true,
});
