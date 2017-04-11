module.exports = {
  stats: 'errors-only',
  devtool: 'source-map',
  context: require('./_config/webpack/context'),
  entry: require('./_config/webpack/entry'),
  output: require('./_config/webpack/output'),
  module: require('./_config/webpack/module'),
  plugins: require('./_config/webpack/plugins'),
  resolve: require('./_config/webpack/resolve'),
  devServer: require('./_config/webpack/dev-server'),
  performance: require('./_config/webpack/performance')
};
