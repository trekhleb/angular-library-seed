let path = require('path');

/**
 * Webpack Plugins
 */
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {

  /**
   * Source map for Karma from the help of karma-sourcemap-loader &  karma-webpack
   *
   * Do not change, leave as is or it wont work.
   * @see: https://github.com/webpack/karma-webpack#source-maps
   */
  devtool: 'inline-source-map',

  resolve: require('./config/webpack/resolve'),

  /**
   * Options affecting the normal modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#module
   *
   * 'use:' revered back to 'loader:' as a temp. workaround for #1188
   *
   * @see: https://github.com/AngularClass/angular2-webpack-starter/issues/1188#issuecomment-262872034
   */
  module: {

    rules: [

      /**
       * Source map loader support for *.js files
       * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
       *
       * @see: https://github.com/webpack/source-map-loader
       */
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          path.resolve(__dirname, 'node_modules/rxjs'),
          path.resolve(__dirname, 'node_modules/@angular'),
          path.resolve(__dirname, 'node_modules/positioning')
        ]
      },

      /**
       * Typescript loader support for .ts and Angular 2 async routes via .async.ts
       *
       * @see: https://github.com/s-panferov/awesome-typescript-loader
       */
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            query: {
              // use inline sourcemaps for "karma-remap-coverage" reporter
              sourceMap: false,
              inlineSourceMap: true,
              compilerOptions: {
                // Remove TypeScript helpers to be injected
                // below by DefinePlugin
                removeComments: true
              }
            },
          },
          'angular2-template-loader'
        ],
        exclude: [/\.e2e\.ts$/]
      },

      /**
       * Json loader support for *.json files.
       *
       * @see: https://github.com/webpack/json-loader
       */
      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      /**
       * Raw loader support for *.css files
       * Returns file content as string
       *
       * @see: https://github.com/webpack/raw-loader
       */
      {
        test: /\.css$/,
        loader: ['to-string-loader', 'css-loader']
      },

      /**
       * Raw loader support for *.scss files
       *
       * @see: https://github.com/webpack/raw-loader
       */
      {
        test: /\.scss$/,
        loader: ['raw-loader', 'sass-loader']
      },

      /**
       * Raw loader support for *.html
       * Returns file content as string
       *
       * @see: https://github.com/webpack/raw-loader
       */
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },

      /**
       * Instruments JS files with Istanbul for subsequent code coverage reporting.
       * Instrument only testing sources.
       *
       * @see: https://github.com/deepsweet/istanbul-instrumenter-loader
       */
      {
        enforce: 'post',
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      },

      /**
       * File loader for supporting images, for example, in CSS files.
       */
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?[a-z0-9=\.]+)?$/,
        use: 'file-loader'
      }

    ]
  },

  /**
   * Add additional plugins to the compiler.
   *
   * @see: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: [
    /**
     * Plugin: ContextReplacementPlugin
     * Description: Provides context to Angular's use of System.import
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
     * See: https://github.com/angular/angular/issues/11580
     */
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.resolve(__dirname, 'src'),
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),

    /**
     * Plugin LoaderOptionsPlugin (experimental)
     *
     * @see: https://gist.github.com/sokra/27b24881210b56bbaff7
     */
    new LoaderOptionsPlugin({
      debug: false,
      options: {
        // legacy options go here
      }
    }),

  ],

  performance: require('./config/webpack/performance')
};
