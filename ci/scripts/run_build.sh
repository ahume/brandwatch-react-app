#!/usr/bin/env bash
set -e -u -x

env

VERSION=$(<.git/refs/heads/gcp-integration)
RESOURCE=brandwatch-react-app.$VERSION.tar.gz

echo "$VERSION"
echo "$RESOURCE"

mv dependency-cache/node_modules brandwatch-react-app
cd brandwatch-react-app && yarn build

tar -cvzf $RESOURCE  --directory=./public .
cp ./brandwatch-react-app.$VERSION.tar.gz ../public
