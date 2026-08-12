#!/bin/bash
# Run: bash scripts/lib/parse-cypress-failure.test.sh
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=./parse-cypress-failure.sh
source "$DIR/parse-cypress-failure.sh"

FIXTURE_OUTPUT=$(cat "$DIR/fixtures/sample-failure-output.txt")
parse_cypress_failure "$FIXTURE_OUTPUT"

fail() {
  echo "FAIL: $1"
  exit 1
}

[ "$TEST_NAME" = "should display the correct number of stat cards" ] || fail "TEST_NAME got: '$TEST_NAME'"
[[ "$ERROR_LINE" == *"AssertionError"* ]] || fail "ERROR_LINE got: '$ERROR_LINE'"
[ "$FILE_PATH" = "cypress/e2e/profile.spec.cy.ts" ] || fail "FILE_PATH got: '$FILE_PATH'"
[ "$LINE_NUM" = "45" ] || fail "LINE_NUM got: '$LINE_NUM'"
[ -n "$FIRST_FAILURE" ] || fail "FIRST_FAILURE is empty — not implemented yet"
[[ "$FIRST_FAILURE" == *"AssertionError"* ]] || fail "FIRST_FAILURE missing the assertion detail: '$FIRST_FAILURE'"
[[ "$FIRST_FAILURE" == *"should display the correct number of stat cards"* ]] || fail "FIRST_FAILURE missing the test name: '$FIRST_FAILURE'"
[[ "$FIRST_FAILURE" != *"2) "* ]] || fail "FIRST_FAILURE bled into a second failure block: '$FIRST_FAILURE'"

echo "PASS: all parse_cypress_failure assertions"
