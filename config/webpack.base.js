const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dir = path.join(__dirname, '..'); //拿到根目录 /Users/scc/draft4/react-boilerplate

module.exports = {
  mode: 'development',
  entry: {
    app: ['webpack-hot-middleware/client?noInfo=true&reload=true' , './src'],
  },
  output: {
    path: path.join(dir, 'build'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"],
            // plugins: ['react-hot-loader/babel'],
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    }),
  ]
}