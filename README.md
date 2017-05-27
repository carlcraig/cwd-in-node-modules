cwd-in-node-modules
===================

> check if the current working directory is in a node_modules directory or subdirectory

Installation
------------

```sh
npm i --save cwd-in-node-modules]
# or
yarn add cwd-in-node-modules
```

Alternatively you can install globally:

```
npm i -g cwd-in-node-modules
```

Usage
-----

```js
const isCwdInNodeModules = require('cwd-in-node-modules');

if (isCwdInNodeModules()) {
  console.log('CWD is anywhere in a node_modules directory')
}

if (isCwdInNodeModules(true)) {
  console.log('CWD is directly in a node_modules directory')
}
```

Usage CLI
---------

```
cwd-in-node-modules && echo "In node_modules" || echo "Not In node_modules"
```
