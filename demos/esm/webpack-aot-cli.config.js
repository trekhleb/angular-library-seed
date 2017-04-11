const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

const config = {
  devtool: 'source-map',
  entry: {
    polyfills: path.resolve(__dirname, 'src', 'polyfills.browser.ts'),
    main: path.resolve(__dirname, 'src', 'main-jit.ts')
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'aot-cli'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['@ngtools/webpack']
        // use: ['@ultimate/aot-loader']
      },

      /*
       * to string and css loader support for *.css files (from Angular components)
       * Returns file content as string
       *
       */
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader']
      },

      {
        test: /\.html$/,
        use: 'raw-loader'
      },

      {
        test: /\.scss$/,
        loader: ['raw-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),

    new AotPlugin({
      tsConfigPath: path.resolve(__dirname, 'tsconfig-aot-cli.json')
    }),

    /*
     * Plugin: HtmlWebpackPlugin
     * Description: Simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles that include a hash in the filename
     * which changes every compilation.
     *
     * See: https://github.com/ampedandwired/html-webpack-plugin
     */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.ejs'),
      title: 'Angular Library Starter',
      inject: 'body'
    }),

    /**
     * Plugin: ContextReplacementPlugin
     * Description: Provides context to Angular's use of System.import
     *
     * @see: https://github.com/angular/angular/issues/11580
     */
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, 'src'),
      {}
    ),

    /*
     * Plugin: CommonsChunkPlugin
     * Description: Shares common code between the pages.
     * It identifies common modules and put them into a commons chunk.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
     * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
     */
    new CommonsChunkPlugin({
      name: 'polyfills',
      chunks: ['polyfills']
    }),

    // This enables tree shaking of the vendor modules
    new CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: module => /node_modules/.test(module.resource)
    }),

    // Specify the correct order the scripts will be injected in
    new CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
  ]
};

module.exports = config;
