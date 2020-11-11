#!/bin/bash

rm -rf build

yarn build-site

yarn build-resume

aws s3 sync --delete --size-only ./build s3://hoff.tech

# always copy index.html
aws s3 cp ./build/index.html s3://hoff.tech
