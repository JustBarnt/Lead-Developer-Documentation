//Node Imports
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

//Webpack Imports
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

const publishDir = 'dist-final';
const mode = process.env.ENV;


const devConfig = {
	mode: 'development',
	entry: './src/app.mjs',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, publishDir),
		publicPath: '',
	},
	module: {
		rules: 
		[
			{
				test: /\.mjs?$/,
				include: [
					path.resolve(__dirname, 'app'),
				],
				use:{
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/env'],
						],
					},
				},
			},
		],
	},
	plugins:[
		new HtmlWebpackPlugin(
			{
				template: path.resolve(__dirname, './src/index.html'),
				filename: 'index.html',
				inject: 'head',
				scriptLoading: 'module',
			}),
		new CleanWebpackPlugin(),
	],
	devtool: 'source-map',
	devServer: {
		server: 'https',
		static: {
			directory: path.resolve(__dirname, publishDir),
		},
		host: 'localhost',
		port: 9001,
		devMiddleware:{
			index: 'index.html',
			writeToDisk: true,
		},
	},
};

const productionConfig = {
	mode: 'production',
	entry: './src/app.mjs',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, publishDir),
		publicPath: '',
	},
	module: {
		rules: 
		[
			{
				test: /\.mjs?$/,
				include: [
					path.resolve(__dirname, 'app'),
				],
				use:{
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/env'],
						],
					},
				},
			},
		],
	},
	plugins:[
		new HtmlWebpackPlugin(
			{
				template: path.resolve(__dirname, './src/index.html'),
				filename: 'index.html',
				inject: 'head',
				scriptLoading: 'module',
			}),
		new CleanWebpackPlugin(),
	],
};

const config = mode.toLowerCase() == 'production' ? productionConfig : devConfig;

export default config ;