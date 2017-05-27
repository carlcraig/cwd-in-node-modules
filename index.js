const path = require('path');

module.exports = (excludeSubdirectories = false) => {
  const directories = process.cwd().split(path.sep);
  if (excludeSubdirectories) {
    return directories.pop() === 'node_modules';
  } else {
    return directories.includes('node_modules');
  }
};
