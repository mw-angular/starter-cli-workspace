#!/bin/bash

yarn run test-ci:website || exit
yarn run e2e-ci:website || exit
