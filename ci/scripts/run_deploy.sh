#!/usr/bin/env bash
set -e -u -x

echo $GCP_SERVICE_ACCOUNT_KEY > key.json
gcloud auth activate-service-account --key-file key.json

VERSION=$(<brandwatch-react-app/.git/refs/heads/gcp-integration)
RESOURCE=brandwatch-react-app.$VERSION.tar.gz

echo 'version'
echo $version

cd release-artifact;
tar -xvzf $RESOURCE

gsutil \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public,max-age=315360000" \
  cp -r * gs://$STORAGE_BUCKET

gsutil -m acl -r ch -u AllUsers:R gs://$STORAGE_BUCKET
