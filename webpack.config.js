const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const scssf = require('cssf/int/sass');

const VERSION = 1;

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: [
    path.resolve(__dirname, `src/v${VERSION}/index.scss`)
  ],
  output: {
    path: path.join(__dirname, 'dist'),
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                path.resolve(__dirname, 'node_modules'),
              ],
              functions: scssf
            }
          }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
};