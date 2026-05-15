#!/usr/bin/env node
import { existsSync, mkdirSync, cpSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(__dirname, "..");
const sourceSkills = join(pkgRoot, "skills");

function ask(query) {
	const rl = createInterface({ input: process.stdin, output: process.stdout });
	return new Promise((resolve) =>
		rl.question(query, (a) => {
			rl.close();
			resolve(a.trim());
		}),
	);
}

function help() {
	console.log(`Usage: craft-skills init [destination] [options]

Copy agent skills into your project.

Arguments:
  destination    Target directory (default: .agents)

Options:
  --force, -f    Overwrite existing files without prompting
  --help, -h     Show this help message

Examples:
  craft-skills init
  craft-skills init ./my-skills
  craft-skills init --force
`);
}

async function main() {
	const args = process.argv.slice(2);

	if (args.includes("--help") || args.includes("-h")) {
		help();
		process.exit(0);
	}

	if (args[0] && args[0] !== "init") {
		console.error(`Unknown command: ${args[0]}\n`);
		help();
		process.exit(1);
	}

	const force = args.includes("--force") || args.includes("-f");

	const destArg = args.find((a) => a !== "init" && !a.startsWith("-")) || ".agents";
	const dest = join(process.cwd(), destArg);
	const destSkills = join(dest, "skills");

	if (!existsSync(sourceSkills)) {
		console.error("Skills directory not found in package. Corrupt install?");
		process.exit(1);
	}

	const entries = readdirSync(sourceSkills);
	if (!entries.length) {
		console.error("No skills found in package. Corrupt install?");
		process.exit(1);
	}

	if (!force && existsSync(destSkills)) {
		const ans = await ask(`${destSkills} already exists. Overwrite? (y/N) `);
		if (ans.toLowerCase() !== "y") {
			console.log("Aborted.");
			process.exit(0);
		}
	}

	mkdirSync(destSkills, { recursive: true });
	cpSync(sourceSkills, destSkills, { recursive: true, force: true });

	console.log(`\n  ✓ Skills copied to ${destSkills}`);
	console.log(`  ${readdirSync(destSkills).length} skill(s) installed.\n`);
}

main().catch((e) => {
	console.error(e.message);
	process.exit(1);
});
