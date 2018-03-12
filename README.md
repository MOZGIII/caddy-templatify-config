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

```shell
caddy-templatify-config [PREFIX]
```

Tool reads the config file sample from stdin and writes the resulting
template to stdout:

```shell
caddy-templatify-config < sample/config.json > template/config.json
```

### Example

```shell
$ cat > config.js
{
  "hello": "world"
}
$ cat config.js | caddy-templatify-config
{"hello":"{{ if .Env.HELLO }}{{ js .Env.HELLO }}{{ else }}world{{ end }}"}
```

And with prefix:

```shell
$ cat config.js | caddy-templatify-config "MY_APP_"
{"hello":"{{ if .Env.MY_APP_HELLO }}{{ js .Env.MY_APP_HELLO }}{{ else }}world{{ end }}"}
```
