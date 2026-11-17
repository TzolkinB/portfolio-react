// Checks whether upstream blockers tracked in issue #204 have cleared: packages blocking the
// ESLint 10 / TypeScript 7 upgrades (peer ranges) and the picomatch advisory behind npm audit.
//
// Prints one tab-separated line per blocker: package, cleared|blocked, latest version, detail, hint.
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

// Peer-range blockers are "cleared" when the latest release's peer range accepts `needs`.
const PEER_BLOCKERS = [
  { pkg: "eslint-plugin-import", peer: "eslint", needs: "10.0.0" },
  { pkg: "eslint-plugin-react", peer: "eslint", needs: "10.0.0" },
  { pkg: "typescript-eslint", peer: "typescript", needs: "7.0.0" },
];
const PEER_HINT =
  "Tick its box in the issue body, and once all three peer-range blockers are cleared retry #199, #198 and #183.";

// Advisory blockers are "cleared" when the latest release is newer than the last vulnerable one.
// picomatch ReDoS GHSA-fc5q-39xc-vjpf affects <=4.0.7 and is the root of the remaining npm audit findings.
const ADVISORY_BLOCKERS = [
  {
    pkg: "picomatch",
    lastVulnerable: "4.0.7",
    hint: "Run `npm audit fix` and confirm the remaining findings clear.",
  },
];

const npmView = (pkg, field) =>
  execFileSync("npm", ["view", pkg, field, "--json"], { encoding: "utf8" }).trim();

// Output: package, status, latest version, detail, hint (tab-separated).
for (const { pkg, peer, needs } of PEER_BLOCKERS) {
  const version = JSON.parse(npmView(pkg, "version"));
  const range = JSON.parse(npmView(pkg, `peerDependencies.${peer}`) || '""');
  const cleared = Boolean(range) && semver.satisfies(needs, range);
  const detail = `peer range: ${range}`;
  console.log([pkg, cleared ? "cleared" : "blocked", version, detail, PEER_HINT].join("\t"));
}

for (const { pkg, lastVulnerable, hint } of ADVISORY_BLOCKERS) {
  const version = JSON.parse(npmView(pkg, "version"));
  const cleared = semver.gt(version, lastVulnerable);
  const detail = `latest is newer than last vulnerable ${lastVulnerable}`;
  console.log([pkg, cleared ? "cleared" : "blocked", version, detail, hint].join("\t"));
}
