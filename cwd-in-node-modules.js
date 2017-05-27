#!/usr/bin/env node

const program = require('commander');
const isCwdInNodeModules = require('./index');
const pkg = require('./package.json');

program
  .version(pkg.version)
  .option('-e, --exclude-subdirectories', 'Exclude Sub Directories')
  .parse(process.argv)
;

if (isCwdInNodeModules(program.excludeSubdirectories)) {
  process.exit(0);
} else {
  process.exit(1);
}
