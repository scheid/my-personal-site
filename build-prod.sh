#!/usr/bin/env bash

# builds the optimized version.
ng build --prod --aot --vendor-chunk --common-chunk --delete-output-path --buildOptimizer
