const path = require('path');
let webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.resolve(__dirname, 'tsconfig-jit.json')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new webpack.ProgressPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.ejs')
    }),

    /**
     * @see: https://github.com/angular/angular/issues/11580
     */
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, 'src'),
      {}
    ),
  ]
};

module.exports = config;
