# CLAUDE.md

Guidance for working in this repo beyond what package.json already documents.

## Environment

- Dev server: `npm start` serves at `http://localhost:4280` (not production). `cypress.config.ts` defaults `baseUrl` to this.
- `npm test` / `npm run cy:chrome` run Cypress against that local server via `start-server-and-test`.
- `npm run lint:husky` is the strict pass used in git hooks (zero warnings + yamllint) — stricter than plain `npm run lint`.

## Cypress native binary (issue #162, still open)

The Cypress native binary intermittently fails to install correctly in this sandbox — a stub binary gets swapped in instead of the real download. `.husky/pre-push` runs Cypress automatically on every push, so this can silently block pushes.

- Run `npx cypress verify` at the start of a session before trusting the pre-push hook. If it fails with "bad option" / "--smoke-test" / "--ping=..." errors, that's this known issue, not a real test regression — don't burn time reinstalling or chasing it as a code problem.
- A single successful run doesn't mean it's "fixed" — this has recurred within the same day before.
- If it needs to run manually, Docker is the fallback (see below).

## Replicating CI locally with Docker

```bash
docker pull --platform linux/amd64 cypress/included:<version>
docker run --rm --platform linux/amd64 \
  -v "$PWD":/e2e -v /e2e/node_modules -w /e2e \
  -e CYPRESS_INSTALL_BINARY=0 -e CYPRESS_BASE_URL=http://localhost:4280 \
  cypress/included:<version> \
  bash -c "npm ci --silent && (npm start &) && npx wait-on http://localhost:4280 --timeout 120000 && cypress run --browser chrome --headless"
```

- Must pin `--platform linux/amd64` on Apple Silicon — the arm64 image only bundles Electron + Firefox, not Chrome, while CI's `ubuntu-latest` runners are amd64 with Chrome available.
- Run the dev server and Cypress in the *same* container, not server-on-host bridged via `host.docker.internal` — that hits a false `403 Forbidden` from webpack-dev-server's host-header check.
- `-v /e2e/node_modules` shadows the mounted host `node_modules` so the amd64 `npm ci` doesn't clobber the host's arm64 install.

For CI failures generally, fetch raw logs before diagnosing: `gh run view --log-failed`.

## Deploy is live infrastructure

`npm run deploy` / `npm run prod` push straight to the production S3 bucket (`s3://www.kimbell.me`) and invalidate CloudFront. There is no staging environment — treat these as irreversible, user-confirmed actions, not routine build steps.
