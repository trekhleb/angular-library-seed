module.exports = {
  stats: 'errors-only',
  devtool: 'source-map',
  context: require('./config/webpack/context'),
  entry: require('./config/webpack/entry'),
  output: require('./config/webpack/output'),
  module: require('./config/webpack/module'),
  plugins: require('./config/webpack/plugins'),
  resolve: require('./config/webpack/resolve'),
  devServer: require('./config/webpack/dev-server'),
  performance: require('./config/webpack/performance')
};
