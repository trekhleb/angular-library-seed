let path = require('path');

/**
 * @see https://webpack.js.org/configuration/output/
 */
module.exports = {
  path: path.join(process.cwd(), 'dist'),
  filename: '[name].bundle.js'
};
