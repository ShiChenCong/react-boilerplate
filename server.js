const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require("webpack-hot-middleware");
const webpackConf = require('./config/webpack.dev.js');

const app = express();
const compiler = webpack(webpackConf);

app.use(webpackMiddleware(compiler, {
  publicPath: webpackConf.output.publicPath,
}));

app.use(require("webpack-hot-middleware")(compiler));

app.listen(3000, () => {
  console.log("成功启动：localhost:"+ 3000)
});