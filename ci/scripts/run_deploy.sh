#!/usr/bin/env bash

set -e -u -x

STORAGE_BUCKET=my-platform-stage-gcp0-bwcom-net

echo $GCP_SERVICE_ACCOUNT_KEY > key.json
gcloud auth activate-service-account --key-file key.json

cd release-artifact;
tar -xvzf brandwatch-react-app-1.tar.gz

gsutil \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public,max-age=315360000" \
  cp -r * gs://$STORAGE_BUCKET

gsutil -m acl -r ch -u AllUsers:R gs://$STORAGE_BUCKET
