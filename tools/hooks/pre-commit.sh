#!/bin/bash

npx lint-staged || exit
npm run lint-ci:website || exit
