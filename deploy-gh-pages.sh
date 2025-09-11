#!/bin/bash
set -e  # stop on first error

# Run your Angular build
npm run build

# Define docs folder
DOCS_DIR="docs"
BROWSER_DIR="$DOCS_DIR/browser"

# Copy contents of /docs/browser into /docs
if [ -d "$BROWSER_DIR" ]; then
  echo "Copying built files from $BROWSER_DIR to $DOCS_DIR..."
  cp -r "$BROWSER_DIR"/* "$DOCS_DIR"/
  
  # Delete the /browser folder
  echo "Removing $BROWSER_DIR..."
  rm -rf "$BROWSER_DIR"
else
  echo "Error: $BROWSER_DIR does not exist. Did the build succeed?"
  exit 1
fi

echo "" > docs/.nojekyll

echo "Deployment prep complete! Push your changes to GitHub to update Pages."
