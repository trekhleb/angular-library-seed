let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');

/**
 * @see https://webpack.js.org/configuration/plugins/
 */
module.exports = [
  new webpack.ProgressPlugin(),

  /**
   * ContextReplacementPlugin
   * @description: Provides context to Angular's use of System.import
   * @see: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
   * @see: https://github.com/angular/angular/issues/11580
   */
  new webpack.ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
    path.join(process.cwd(), 'src')
  ),

  new ExtractTextPlugin('style.bundle.css')
];
