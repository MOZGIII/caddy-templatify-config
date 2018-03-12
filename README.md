# caddy-templatify-config

A command line tool written for Node.js that takes a configuration
file in JSON format and converts it to template file that evaluates
the values from the environment variables when used as a template in a
Caddy web server.

Useful to prepare config file templates for Caddy that's running in docker.

## Installation

Global:

```shell
npm install -g caddy-templatify-config
```

As a dependency:

```shell
npm install --save-dev caddy-templatify-config
```

or

```shell
yarn add --dev caddy-templatify-config
```

## Usage

Tool reads the config file sample from stdin and writes the resulting
template to stdout:

```shell
cat sample/config.json | caddy-templatify-config > template/config.json
```
