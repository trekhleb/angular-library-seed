const webpack = require('webpack');
let path = require('path');

const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

/**
 * Webpack configuration
 *
 * @see: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

  /**
   * The entry point for the bundle.
   *
   * @see: http://webpack.github.io/docs/configuration.html#entry
   */
  entry: {
    main: './index'
  },

  /**
   * Options affecting the resolving of modules.
   *
   * @see: http://webpack.github.io/docs/configuration.html#resolve
   */
  resolve: {
    /**
     * An array of extensions that should be used to resolve modules.
     *
     * @see: http://webpack.github.io/docs/configuration.html#resolve-extensions
     */
    extensions: ['.ts', '.js', '.json']
  },

  /**
   * Options affecting the normal modules.
   *
   * @see: http://webpack.github.io/docs/configuration.html#module
   */
  module: {
    rules: [

      /**
       * Typescript loader support for .ts
       *
       * @see: https://github.com/s-panferov/awesome-typescript-loader
       * @see: https://github.com/TheLarkInn/angular2-template-loader
       */
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.webpack.json'
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [
          /\.(spec|e2e)\.ts$/
        ]
      },

      /**
       * Json loader support for *.json files.
       *
       * @see: https://github.com/webpack/json-loader
       */
      {
        test: /\.json$/,
        use: 'json-loader'
      },

      /**
       * To string and css loader support for *.css files (from Angular components)
       * Returns file content as string
       */
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader']
      },

      /**
       * To string and sass loader support for *.scss files (from Angular components)
       * Returns compiled css content as string
       */
      {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader']
      },

      /**
       * Raw loader support for *.html
       * Returns file content as string
       *
       * @see: https://github.com/webpack/raw-loader
       */
      {
        test: /\.html$/,
        use: 'html-loader'
      },

      /**
       * File loader for supporting fonts, for example, in CSS files.
       */
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/[name].[hash].[ext]'
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
     * Plugin: ForkCheckerPlugin
     * Description: Do type checking in a separate process, so webpack don't need to wait.
     *
     * @see: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
     */
    new CheckerPlugin(),

    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.resolve(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
  ]
};
