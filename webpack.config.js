const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		home: './src/js/home.js',
		cable: './src/js/cable.js',
		battery: './src/js/battery.js',
		inverter: './src/js/inverter.js',
		industrialiot: './src/js/industrialiot.js',
		projects: './src/js/projects.js',
		contactus:'./src/js/contactus.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: ['es2015']
				}
			}
		}, {
			test: /\.vue$/,
			exclude: /node_modules/,
			use: [{
				loader: "vue-loader",
				options: {
	                // vue-loader options go here
	                postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })]
	            }
			}]
		}, {
			test: /\.json$/,
			use: [{
				loader: "json-loader"
			}]
		}, {
			test: /\.css$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}]
		}, {
			test: /\.less$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings 
			}, {
				loader: "css-loader"
			}, {
				loader: "less-loader" // compiles Less to CSS 
			}]
		}, {
			test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'img/[name].[ext]'
				}
			}]
		}]
	},
	plugins: [
		/*new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false,
		        drop_console: true
		    }
		}),*/
		new HtmlWebpackPlugin({
			title: 'home',
			filename: 'home.html',
			template: 'src/home.html',
			chunks: ['home']
		}),
		new HtmlWebpackPlugin({
			title: 'cable',
			filename: 'cable.html',
			template: 'src/cable.html',
			chunks: ['cable']
		}),
		new HtmlWebpackPlugin({
			title: 'battery',
			filename: 'battery.html',
			template: 'src/battery.html',
			chunks: ['battery']
		}),
		new HtmlWebpackPlugin({
			title: 'inverter',
			filename: 'inverter.html',
			template: 'src/inverter.html',
			chunks: ['inverter']
		}),
		new HtmlWebpackPlugin({
			title: 'industrialiot',
			filename: 'industrialiot.html',
			template: 'src/industrialiot.html',
			chunks: ['industrialiot']
		}),
		new HtmlWebpackPlugin({
			title: 'projects',
			filename: 'projects.html',
			template: 'src/projects.html',
			chunks: ['projects']
		}),
		new HtmlWebpackPlugin({
			title: 'contactus',
			filename: 'contactus.html',
			template: 'src/contactus.html',
			chunks: ['contactus']
		})
	]
};