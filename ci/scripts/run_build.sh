#!/usr/bin/env bash
set -e -u -x

env

mv dependency-cache/node_modules brandwatch-react-app
cd brandwatch-react-app && yarn build

echo .git/refs/heads
ls -lrt

export version = $(<.git/refs/heads/gcp-integration)

echo 'version'
echo $version

tar -cvzf ./brandwatch-react-app.$version.tar.gz  --directory=./public .
 cp ./brandwatch-react-app-1.tar.gz ../public
