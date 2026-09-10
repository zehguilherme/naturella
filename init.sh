#!/usr/bin/env bash
set -e

echo "=== Naturella harness verification ==="
echo "=== npm run lint ==="
npm run lint
echo "=== npm run build ==="
npm run build
echo "=== Verification complete ==="
