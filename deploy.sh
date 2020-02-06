#!/bin/sh
yarn install
yarn build --label v1.0.0.$BUILD_NUMBER
aws s3 cp dist/rb_widget.v1.0.0.$BUILD_NUMBER.js s3://railsimagesrb/components/