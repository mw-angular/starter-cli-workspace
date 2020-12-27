#!/bin/bash

npm run test-ci:website || exit
npm run e2e-ci:website || exit

npm run test-ci:design-system || exit
