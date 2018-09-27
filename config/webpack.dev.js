const webpack = require('webpack');
const Merge = require('webpack-merge');
const baseConf = require('./webpack.base.js');

module.exports = Merge(baseConf, {
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
})