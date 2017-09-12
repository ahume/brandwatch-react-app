#!/usr/bin/env bash
set -e -u -x

env

mv dependency-cache/node_modules brandwatch-react-app
cd brandwatch-react-app && yarn build

VERSION = $(<.git/refs/heads/gcp-integration)

tar -cvzf ./brandwatch-react-app.$VERSION.tar.gz  --directory=./public .
cp ./brandwatch-react-app.$VERSION.tar.gz ../public
