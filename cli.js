#!/usr/bin/env nodejs
"use strict";

const { readWholeStdin, writeToStdout, templatifyJson } = require("./index");

const prefix = process.argv[2] || "";

readWholeStdin()
  .then(buffer => templatifyJson(buffer, prefix))
  .then(buffer => writeToStdout(buffer))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
