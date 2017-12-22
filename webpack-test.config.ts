import * as webpack from 'webpack';
import * as path from 'path';

export default {
  resolve: {
    extensions: [ '.ts', '.js', '.json' ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.json'
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [
          /\.e2e\.ts$/,
          /node_modules/
        ]
      },

      {
        test: /.ts$/,
        exclude: /(node_modules|\.spec\.ts|\.e2e\.ts$)/,
        loader: 'istanbul-instrumenter-loader',
        enforce: 'post'
      },

      {
        test: /\.json$/,
        use: 'json-loader'
      },

      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader']
      },

      {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.html$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null,
      test: /\.(ts|js)($|\?)/i
    }),

    new webpack.ContextReplacementPlugin(
      /**
       * The (\\|\/) piece accounts for path separators in *nix and Windows
       */
      /\@angular(\\|\/)core(\\|\/)esm5/,
      path.join(__dirname, 'src'), // location of your src
      {
        /**
         * your Angular Async Route paths relative to this root directory
         */
      }
    ),

    new webpack.NoEmitOnErrorsPlugin()
  ]
} as webpack.Configuration;
