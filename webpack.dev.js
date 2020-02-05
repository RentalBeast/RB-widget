 const merge = require('webpack-merge');
 const common = require('./webpack.config.js');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = merge(common, {
   mode: 'development',
   devtool: "source-map",
     plugins: [
         new HtmlWebpackPlugin({
             template: './client/public/index.html'
         })
     ],
 });