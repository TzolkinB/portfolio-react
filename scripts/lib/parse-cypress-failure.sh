#!/bin/bash
# Parses Cypress/mocha failure output. Meant to be sourced, not executed.
# Sets: TEST_NAME, ERROR_LINE, FILE_PATH, LINE_NUM, FIRST_FAILURE.

parse_cypress_failure() {
  local output="$1"

  TEST_NAME=$(echo "$output" | grep -E '1\) ' | grep -o 'should.*' | head -1)
  ERROR_LINE=$(echo "$output" | grep -E 'AssertionError|Error:' | head -1 | xargs)

  local file_line
  file_line=$(echo "$output" | grep -oE 'cypress/e2e/[A-Za-z0-9_.-]+\.spec\.cy\.ts:[0-9]+' | head -1)
  FILE_PATH=$(echo "$file_line" | cut -d: -f1)
  LINE_NUM=$(echo "$file_line" | cut -d: -f2)

  # Pull out the full text of the first failing test's recap block.
  #
  # Cypress prints "1) <test name>" TWICE: once inline while the run is in
  # progress (just a heading, no detail), and once in the recap after all
  # specs finish (heading + assertion + stack trace — what we actually want).
  # The recap always starts right after the one-time "N failing" summary
  # line, so we use that line as a marker and only start capturing on the
  # "1) " we see *after* it.
  #
  # awk reads the input one line at a time and checks each line against every
  # `/pattern/ { action }` rule below, top to bottom, before moving to the
  # next line. A rule with no action, like the last one, just means "run this
  # action for every line matching the pattern."
  FIRST_FAILURE=$(echo "$output" | awk '
    # Seen the summary line ("1 failing", "2 failing", ...)? Flip a flag.
    /[0-9]+ failing/ { seen_summary = 1 }

    # First "N) ..." line after the summary is the real recap heading — start
    # capturing from here. `next` skips straight to the next input line so
    # this same heading line can'\''t immediately re-match the exit rule below.
    seen_summary && !capture && /^ *[0-9]+\) / { capture = 1; print; next }

    # The next numbered failure, or the results table, means this block is
    # over. Stop the whole script (no more lines get processed or printed).
    capture && (/^ *[0-9]+\) / || /^ *\(Results\)/) { exit }

    # While capture is on, print the line as-is.
    capture { print }
  ')
}
