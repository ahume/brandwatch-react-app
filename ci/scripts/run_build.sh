#!/usr/bin/env bash

set -e -u -x

export CURRENT_TIMESTAMP=$(date +"%Y%m%d%H%S")
mv dependency-cache/node_modules brandwatch-react-app
cd brandwatch-react-app && yarn build
tar -cvzf ./brandwatch-react-app-$CURRENT_TIMESTAMP.tar.gz  --directory=./public .
# cp ./brandwatch-react-app-$CURRENT_TIMESTAMP.tar.gz ../
# cp ./brandwatch-react-app-$CURRENT_TIMESTAMP.tar.gz ./public
 cp ./brandwatch-react-app-$CURRENT_TIMESTAMP.tar.gz ../public
