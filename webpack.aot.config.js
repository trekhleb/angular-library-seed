'use strict';

let path = require('path');

module.exports = {

  context: path.join(process.cwd(), 'src'),

  stats: 'errors-only',

  devtool: 'source-map',

  entry: require('./config/webpack/entry'),

  output: require('./config/webpack/output'),

  module: require('./config/webpack/module'),

  plugins: require('./config/webpack/plugins'),

  resolve: require('./config/webpack/resolve'),

  devServer: require('./config/webpack/dev-server'),

  performance: require('./config/webpack/performance')
};
