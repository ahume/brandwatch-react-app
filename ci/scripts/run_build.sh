#!/usr/bin/env bash
set -e -u -x

mv dependency-cache/node_modules brandwatch-react-app
cd brandwatch-react-app && yarn build

VERSION=$(<.git/refs/heads/gcp-integration)
RESOURCE=brandwatch-react-app.$VERSION.tar.gz

echo "$VERSION"
echo "$RESOURCE"

tar -cvzf $RESOURCE  --directory=./public .
cp ./brandwatch-react-app.$VERSION.tar.gz ../build
