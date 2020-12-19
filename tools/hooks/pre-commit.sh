#!/bin/bash

npx lint-staged || exit
npm run lint-ci:website || exit
npm run lint-scss-ci:website || exit
