const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  mode: 'production',
  entry: './server.js',
  target: 'node',
  externals: [webpackNodeExternals()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  stats: 'errors-warnings',
  devtool: "cheap-source-map"
}