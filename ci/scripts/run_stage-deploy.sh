#!/usr/bin/env bash
set -e -u -x

ls -lrt

STORAGE_BUCKET=my-platform-stage-gcp0-bwcom-net

curl ci-utils.bwcom.io/gcloud/install | bash
curl ci-utils.bwcom.io/gcloud/auth | bash

tar -xvzf gcs_bucket/brandwatch-react-app-1.tar.gz

gsutil \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public,max-age=315360000" \
  cp -r gcs_bucket/brandwatch-react-app-1/* gs://$STORAGE_BUCKET

# Set public access to bucket
gsutil -m acl -r ch -u AllUsers:R gs://$STORAGE_BUCKET
