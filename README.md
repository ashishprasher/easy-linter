# easy-linter

[![Version npm](https://img.shields.io/npm/v/easy-linter.svg?style=flat-square)](https://www.npmjs.com/package/easy-linter)

[![NPM](https://nodei.co/npm/easy-linter.png?downloads=true&downloadRank=true)](https://nodei.co/npm/easy-linter/)

easy-linter is a layer on top of [eslint](https://www.npmjs.com/package/eslint). easy-linter has eslint rules defined in advance and is a ready to use package with minimum effort. This package can be used by teams that are working on multiple projects and want centralized repository of eslint rules.

### Overview

easy-linter uses a number of open source projects to work properly:

* [eslint](github.com/eslint/eslint)
* [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
* [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)
* [eslint-restricted-globals](https://github.com/doshisid/eslint-restricted-globals)

And of course easy-linter itself is open source with a public [repository](https://github.com/ashishprasher/easy-linter) on GitHub.

### Installation

easy-linter requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm i easy-linter
```
## Usage

Create a file named ```.eslintrc.json``` file project in root directory of the project
add the following json object.
```
{
  "extends": "./node_modules/easy-linter/index.js"
}
```

You can create ```.eslintignore``` file in root directory of the project to ignore directory/files from linting rules.
