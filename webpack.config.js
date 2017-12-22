var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve('js'),
	entry: {
		css: "font-awesome-webpack!../font-awesome.config.js",
		app: './app.js',
		lib: './lib.js',
		examples: './examples.js',
	},
	output: {
		publicPath: '/public/',
		filename: "[name].js"
	},
	devServer: {
		contentBase: 'public'
	},
	plugins: [
		new HtmlWebpackPlugin({
		  title: 'Hot Module Replacement'
		}),
       new webpack.HotModuleReplacementPlugin()
	  ],
	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!less-loader"
			},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: "file-loader" }		
	
	  		],
	},
	resolve: {
		extensions: ['.', '.js', '.es6']
	}
}