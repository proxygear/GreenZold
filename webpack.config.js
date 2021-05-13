const path = require('path');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: 'stylesheets/[name].css',
  chunkFilename: '[id].css'
});

module.exports = {
  mode: 'development',
  // stats: {
  //    logging: true,
  //    loggingDebug: [/webpack/],
  //    loggingTrace: true,
  //    errors: true,
  //    errorStack: true,
  //    errorDetails: true,
  //  },
  entry: {
    site: ['./source/javascripts/site.js', './source/stylesheets/site.scss']
  },
  output: {
    filename: 'javascripts/[name].js',
    path: path.resolve(__dirname, '.tmp/dist')
  },
  plugins: [MiniCssExtractPlugin],
  module: {
    rules: [
      {
        test: /\.js$/,
        // include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        use: {
          loader: 'eslint-loader',
          options: {
            configFile: '.eslintrc'
          },
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules)/,
        use: [
          // Don't used with MiniCssExtractPlugin
          // 'style-loader',
          {
            loader: _MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, 'stylesheets')
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
  },
};
