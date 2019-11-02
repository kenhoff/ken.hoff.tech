#!/bin/bash

rm -rf build

yarn build-site

yarn build-resume

aws s3 sync --delete --size-only ./build s3://ken.hoff.tech
