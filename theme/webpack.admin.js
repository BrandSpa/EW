const Path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
  	admin: "./client/admin/index.js"
  },
  output: {
  	path: Path.join(__dirname, "/public/js/"),
    filename: "[name].js"
  },
  module: {
  	loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader?cacheDirectory=true"
			}
		]
  }
};
