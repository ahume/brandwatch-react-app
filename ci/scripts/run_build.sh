#!/usr/bin/env bash
set -e -u -x

mv dependency-cache/node_modules brandwatch-react-app
cd brandwatch-react-app && yarn build
tar -cvzf ./brandwatch-react-app-1.tar.gz  --directory=./public .
 cp ./brandwatch-react-app-1.tar.gz ../public
