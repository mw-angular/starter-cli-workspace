#!/bin/bash

npx lint-staged || exit
yarn run lint-ci:website || exit
