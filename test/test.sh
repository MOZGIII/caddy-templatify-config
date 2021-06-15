#!/bin/bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

node ../cli.js MY_PREFIX_ <sample.json >actual.json
cmp -s expected.json actual.json
