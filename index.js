"use strict";

const { constantCase } = require("constant-case");

const readWholeStdin = () => {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  let buffer = "";
  process.stdin.on("data", (chunk) => {
    buffer += chunk;
  });

  const deferred = new Promise((resolve) => {
    process.stdin.on("end", () => {
      resolve(buffer);
    });
  });

  return deferred;
};

const writeToStdout = (buffer) => {
  process.stdout.write(buffer);
};

const templatifyJson = (buffer, prefix) => {
  const json = JSON.parse(buffer);
  const elements = []
  Object.keys(json).forEach((key) => {
    const envexpr = `env "${prefix + constantCase(key)}"`;
    const val = json[key];
    const template = `{{ if ${envexpr} }}"{{ ${envexpr} | js }}"{{ else }}${JSON.stringify(val)}{{ end }}`;
    elements.push(`${JSON.stringify(key)}:${template}`)
  });
  return `{${elements.join(",")}}`;
};

module.exports = {
  readWholeStdin,
  writeToStdout,
  templatifyJson,
};
