#!/bin/bash

echo "Building the project..."
npm run build

echo "Adding changes to git..."
git add .

echo "Committing changes..."
git commit -m "Fix: Update base path from /Jentoai/ to /jentoai/ to match repository name"

echo "Pushing to GitHub..."
git push origin main

echo "Done! Wait 2-3 minutes for GitHub Actions to deploy."
echo "Then visit: https://jafar78697.github.io/jentoai/"
