const path = require('path');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _ESLintPlugin = require('eslint-webpack-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, '.eslintrc'),
  context: path.resolve(__dirname, '../source/javascripts'),
  files: '**/*.js',
});
const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: 'stylesheets/[name].css',
  chunkFilename: '[id].css'
});
const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../source/stylesheets'),
  files: '**/*.(s(c|a)ss|css)'
});

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
  ESLintPlugin: ESLintPlugin,
};
