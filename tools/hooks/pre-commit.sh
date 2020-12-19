#!/bin/bash

npx lint-staged || exit
yarn run lint-ci:website || exit
yarn run lint-scss-ci:website || exit
