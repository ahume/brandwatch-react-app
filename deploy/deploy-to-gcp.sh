#!/usr/bin/env bash

set -e # Exit with nonzero exit code if anything fails

STORAGE_BUCKET=my.bwcom.io

echo "GO"

# We only want to deploy to gcp when on master
# if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "gcp-integration" ]; then
#     exit 0
# fi

curl ci-utils.bwcom.io/gcloud/install | bash
curl ci-utils.bwcom.io/gcloud/auth | bash

yarn build

gsutil \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public,max-age=315360000" \
  cp -r public/* gs://$STORAGE_BUCKET

# Set public access to bucket
gsutil -m acl -r ch -u AllUsers:R gs://$STORAGE_BUCKET
