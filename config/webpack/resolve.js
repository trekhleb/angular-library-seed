let path = require('path');

/**
 * @see https://webpack.js.org/configuration/resolve/
 */
module.exports = {
  modules: [
    'node_modules',
    path.resolve(process.cwd(), 'src')
  ],
  extensions: ['.ts', '.js']
};
