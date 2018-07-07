#!/bin/bash

rm -rf build

node metalsmith.js

aws s3 sync --delete ./build s3://ken.hoff.tech
