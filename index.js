"use strict";

const readWholeStdin = () => {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  let buffer = "";
  process.stdin.on("data", chunk => {
    buffer += chunk;
  });

  const deferred = new Promise(resolve => {
    process.stdin.on("end", () => {
      resolve(buffer);
    });
  });

  return deferred;
};

const writeToStdout = buffer => {
  process.stdout.write(buffer);
};

const templatifyJson = (buffer, prefix) => {
  const json = JSON.parse(buffer);
  const upPrefix = prefix.toUpperCase();
  Object.keys(json).forEach(key => {
    const envexpr = ".Env." + upPrefix + key.toUpperCase();
    const val = json[key];
    const template = `{{ if ${envexpr} }}{{ js ${envexpr} }}{{ else }}${val}{{ end }}`;
    json[key] = template;
  });
  return JSON.stringify(json);
};

module.exports = {
  readWholeStdin,
  writeToStdout,
  templatifyJson
};
