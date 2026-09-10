import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const componentsRoot = path.join(projectRoot, "src", "app", "components");
const componentName = /^[A-Z][A-Za-z0-9]*$/;
const ignoredFile = /(?:\.test|\.spec)\.(?:tsx|jsx)$/;
const invalidFiles = [];

async function collectComponentFiles(directory) {
	let entries;

	try {
		entries = await readdir(directory, { withFileTypes: true });
	} catch (error) {
		if (error.code === "ENOENT") return;
		throw error;
	}

	for (const entry of entries) {
		const entryPath = path.join(directory, entry.name);

		if (entry.isDirectory()) {
			await collectComponentFiles(entryPath);
			continue;
		}

		if (!entry.isFile() || !/\.(?:tsx|jsx)$/.test(entry.name)) continue;
		if (entry.name === "index.tsx" || entry.name === "index.jsx" || ignoredFile.test(entry.name)) continue;

		const baseName = entry.name.replace(/\.(?:tsx|jsx)$/, "");
		if (!componentName.test(baseName)) invalidFiles.push(path.relative(projectRoot, entryPath));
	}
}

await collectComponentFiles(componentsRoot);

if (invalidFiles.length > 0) {
	console.error("Component files must use PascalCase:");
	for (const file of invalidFiles.sort()) console.error(`- ${file}`);
	process.exitCode = 1;
} else {
	console.log("Component naming check passed.");
}
