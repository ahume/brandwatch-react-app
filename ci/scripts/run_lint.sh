#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules brandwatch-react-app
cd brandwatch-react-app && yarn lint
