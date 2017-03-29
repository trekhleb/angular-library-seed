let path = require('path');

/**
 * @see https://webpack.js.org/configuration/module/
 */
module.exports = {
  rules: [
    {
      test: /\.ts$/,
      use: ['awesome-typescript-loader', 'angular2-template-loader'],
    },

    {
      test: /\.html$/,
      use: 'raw-loader'
    },

    {
      test: /\.scss$/,
      use: ['to-string-loader', 'css-loader', 'sass-loader']
    },

    {
      test: /\.css$/,
      include: path.resolve(process.cwd(), 'src', 'app'),
      loaders: ['to-string-loader', 'css-loader']
    },

  ]
};
