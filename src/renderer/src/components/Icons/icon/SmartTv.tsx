import { primary } from "@/constants/css";

const SmartTvIcon = () => (
	<g strokeLinejoin="round" strokeWidth={12}>
		<path
			stroke={primary}
			strokeLinecap="round"
			strokeMiterlimit={10}
			d="M400 85H30v240h370zM100 325l-45 40m275-40 45 40"
		/>
		<path
			stroke={primary}
			strokeLinecap="round"
			strokeMiterlimit={10}
			d="M190 125h170v120H190z"
		/>
		<path
			stroke={primary}
			strokeLinecap="round"
			strokeMiterlimit={10}
			d="M360 285H190M70 125h80v60H70zm0 100h80v60H70z"
		/>
		<path fill={primary} stroke={primary} d="m288 185-25 15v-30z" />
	</g>
);

export default SmartTvIcon;
