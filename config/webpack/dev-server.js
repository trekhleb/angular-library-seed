'use strict';

/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
module.exports = {
  contentBase: './src',
  port: 9000,
  inline: true,
  historyApiFallback: true,
  stats: 'errors-only',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 500
  }
};
