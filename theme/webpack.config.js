const Path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      "babel-polyfill",
      "react",
      "react-dom",
      "axios",
      "qs",
      "react-multiple-render"
    ],
  	app: "./client/app/index.js"
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
  },

	plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.js",
        minChunks: 2
      })
    ]
};
