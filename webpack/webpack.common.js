const path = require('path');
const webpack = require('webpack'); // to access built-in plugins
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: {
    site: ['./source/javascripts/site.js', './source/stylesheets/site.scss']
  },
  output: {
    filename: 'javascripts/[name].js',
    path: path.resolve(__dirname, '../.tmp/dist')
  },
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.ESLintPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin
  ],
};
