'use strict';

// Prod check/uglify on prodbuild from http://stackoverflow.com/questions/25956937/how-to-build-minified-and-uncompressed-bundle-with-webpack

const PROD = JSON.parse(process.env.PROD_ENV || '0'),
    webpack = require('webpack'),
    DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: './index.js',
    output: {
    	path: __dirname,
    	filename: 'bundle.js'
    },
    module: {
    	loaders: [
    		{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    	]
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        })
    ] : [ new DashboardPlugin() ]
}