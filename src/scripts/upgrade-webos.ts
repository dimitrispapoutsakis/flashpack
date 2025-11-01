import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const env = fs.readFileSync(path.join(__dirname, "env.txt"), "utf8");
const envObj = JSON.parse(env);

console.log(envObj);

process.exit(0);
const ipkName = process.env.ipkName;
const ipkDir = process.env.ipkDir;
const sdkDir = process.env.sdkDir;
const fileExcludes = process.env.fileExcludes;
const deviceName = process.env.deviceName ?? "MyPlayerWired";
const appId = process.env.appId ?? "com.lg.app.signage.dev";

import { spawn } from "child_process";
import path, { dirname, resolve } from "path";
import { fileURLToPath } from "url";

/* 
console.log(sdkDir);
process.exit(0); */

const upgradeWebos = () => {
	if (!ipkName || !ipkDir || !sdkDir || !fileExcludes) {
		console.error("Missing required environment variables");
		process.exit(1);
	}
	const scriptPath = resolve(__dirname, "./upgrade-webos.sh");
	// Execute via bash to avoid permission issues
	const upgradeWebosScript = spawn("bash", [
		scriptPath,
		ipkName,
		ipkDir,
		deviceName,
		appId,
	]);
	upgradeWebosScript.stdout.on("data", (data) => {
		console.log(data.toString());
	});
	upgradeWebosScript.stderr.on("data", (data) => {
		console.error(data.toString());
	});
	upgradeWebosScript.on("close", (code) => {
		if (code !== 0) {
			console.error(`Script exited with code ${code}`);
			process.exit(code || 1);
		}
	});
	upgradeWebosScript.on("error", (error) => {
		console.error("Error executing script:", error);
		process.exit(1);
	});
};

upgradeWebos();
