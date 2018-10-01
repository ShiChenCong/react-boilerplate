const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require('happypack');
const dir = path.join(__dirname, '..'); //拿到根目录 /Users/scc/draft4/react-boilerplate

module.exports = {
  mode: 'development',
  entry: {
    app: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src'],
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
          // loader: 'babel-loader',
          loader: 'happypack/loader',
          // options: {
          // presets: ['@babel/preset-env', "@babel/preset-react"],
          // plugins: ['react-hot-loader/babel'],
          // }
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          'css-hot-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          }, 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HappyPack({
      loaders: [{
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', "@babel/preset-react"],
          plugins: [["@babel/plugin-proposal-decorators", { legacy: true }],
            "@babel/plugin-proposal-class-properties"
          ]
        }
      }],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}