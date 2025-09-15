#!/bin/bash

# Script to publish the react-flip-clock-lib package

echo "🚀 Publishing react-flip-clock..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the package root directory."
    exit 1
fi

# Build the package
echo "📦 Building package..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

# Check if dist directory exists and has files
if [ ! -d "dist" ] || [ -z "$(ls -A dist)" ]; then
    echo "❌ Error: dist directory is empty or doesn't exist. Build may have failed."
    exit 1
fi

echo "✅ Build successful!"

# Check if user is logged in to npm
echo "🔐 Checking npm authentication..."
npm whoami

if [ $? -ne 0 ]; then
    echo "❌ You are not logged in to npm. Please run 'npm login' first."
    exit 1
fi

# Show package info
echo "📋 Package information:"
echo "Name: $(node -p "require('./package.json').name")"
echo "Version: $(node -p "require('./package.json').version")"
echo "Description: $(node -p "require('./package.json').description")"

# Ask for confirmation
read -p "🤔 Do you want to publish this package to npm? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Publishing cancelled."
    exit 1
fi

# Publish the package
echo "📤 Publishing to npm..."
npm publish

if [ $? -eq 0 ]; then
    echo "🎉 Package published successfully!"
    echo "📦 Package URL: https://www.npmjs.com/package/react-flip-clock"
else
    echo "❌ Publishing failed. Please check the error messages above."
    exit 1
fi
