const path = require('path');
const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const mode = "development";

module.exports = {
	entry: ["./src/js/index.js", "./src/scss/index.scss"],
	mode: mode,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"]}
			},
			{
				test: /\.(sc|c)ss$/,
				use: [
					miniCssExtractPlugin.loader,
					{ loader: 'css-loader' },
					'sass-loader'
				]
			}
		]
	},
	resolve: {extensions: ["*", ".js", ".jsx"]},
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "main.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new miniCssExtractPlugin({
			filename: 'main.css'
		})
	]
};
