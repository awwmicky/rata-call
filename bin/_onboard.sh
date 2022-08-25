#!/bin/bash

echo "==> Checking for versions";
echo "pnpm" & pnpm --version;
echo "yarn" & yarn --version;
echo "npm" & npm --version;
echo "node" & node --version;

echo "==> Print binary paths"
echo "pnpm" & which pnpm;
echo "yarn" & which yarn;
echo "npm" & which npm;
echo "node" & which node;

echo "==> EDIT"
# pnpm install
git branch

# check npm manager :: pnpm, yarn, npm
# install dependencies
# create 'develop' branch
# create '.vscode/settings.json'
# install husky

read -p "Finished! Press Enter to exit: " x;

exit 1;
