#!/bin/bash
set -euo pipefail

# Only run in remote (Claude Code on the Web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Install GitHub CLI if not already installed
if ! command -v gh &> /dev/null; then
  apt-get update -qq && apt-get install -y -qq gh
fi
