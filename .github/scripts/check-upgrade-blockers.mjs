// Checks whether upstream packages blocking the ESLint 10 / TypeScript 7 upgrades
// (tracked in issue #204) now accept the newer major in their peer dependency ranges.
//
// Prints one line per blocker as "<package>\t<cleared|blocked>\t<latest version>\t<peer range>".
// Exits 0 always; the workflow decides what to do with the output.
/* global process, console */
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";

// semver is installed into a temp dir by the workflow (SEMVER_DIR) so the repo's
// own dependencies stay untouched.
const require = createRequire(`${process.env.SEMVER_DIR ?? process.cwd()}/`);
// semver is deliberately not a repo dependency (see above), so the lint rule does not apply.
// eslint-disable-next-line import/no-extraneous-dependencies
const semver = require("semver");

// A blocker is "cleared" when its latest release's peer range accepts `needs`.
const BLOCKERS = [
  { pkg: "eslint-plugin-import", peer: "eslint", needs: "10.0.0" },
  { pkg: "eslint-plugin-react", peer: "eslint", needs: "10.0.0" },
  { pkg: "typescript-eslint", peer: "typescript", needs: "7.0.0" },
];

const npmView = (pkg, field) =>
  execFileSync("npm", ["view", pkg, field, "--json"], { encoding: "utf8" }).trim();

for (const { pkg, peer, needs } of BLOCKERS) {
  const version = JSON.parse(npmView(pkg, "version"));
  const range = JSON.parse(npmView(pkg, `peerDependencies.${peer}`) || '""');
  const cleared = Boolean(range) && semver.satisfies(needs, range);
  console.log([pkg, cleared ? "cleared" : "blocked", version, range].join("\t"));
}
