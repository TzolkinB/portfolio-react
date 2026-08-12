#!/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=./lib/parse-cypress-failure.sh
source "$DIR/lib/parse-cypress-failure.sh"

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default npm script (can be overridden)
NPM_SCRIPT="${NPM_SCRIPT:-test}"

# Run Cypress tests with env vars and capture output
OUTPUT=$(CYPRESS_BASE_URL=${CYPRESS_BASE_URL:-http://localhost:4280} npm run "$NPM_SCRIPT" 2>&1)
EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
  echo -e "${GREEN}✅ Tests passed${NC}"
  exit 0
fi

echo -e "${RED}❌ Tests failed${NC}"
echo ""

# Extract test name, error, file path, and line number (works for any *.spec.cy.ts,
# not just profile's) plus the real failure block, via the sourced parser
parse_cypress_failure "$OUTPUT"

# Build Claude Code prompt
PROMPT="Test: $TEST_NAME
Error: $ERROR_LINE
File: $FILE_PATH:$LINE_NUM

Full failure output:
$FIRST_FAILURE

Run test after."

# Copy to clipboard
if command -v pbcopy &> /dev/null; then
  # macOS
  echo "$PROMPT" | pbcopy
elif command -v xclip &> /dev/null; then
  # Linux
  echo "$PROMPT" | xclip -selection clipboard
elif command -v clip &> /dev/null; then
  # Windows
  echo "$PROMPT" | clip
else
  echo "⚠️  Clipboard copy not available on this system"
fi

echo -e "${YELLOW}--- Test Output ---${NC}"
echo "$FIRST_FAILURE"
echo ""
echo -e "${YELLOW}--- Claude Code Prompt (copied to clipboard) ---${NC}"
echo "$PROMPT"
echo ""
echo -e "${GREEN}Next: Open Claude Code and paste (Cmd+V or Ctrl+V)${NC}"

exit 1