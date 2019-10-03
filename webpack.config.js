const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

const basePath = __dirname;
const distPath = 'dist';
const webpackInitConfig = {
  mode: 'development',
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    app: ['./src/app.js'],
  },
  plugins: [new Dotenv()],
  output: {
    path: path.join(basePath, distPath),
    filename: '[name].js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
module.exports = webpackInitConfig;
