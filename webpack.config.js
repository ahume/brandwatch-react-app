const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    }],
  },
  output:  {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      __AUTH_AUDIENCE__: `"${process.env.AUTH_AUDIENCE}"`,
      __AUTH_DOMAIN__: `"${process.env.AUTH_DOMAIN}"`,
    }),
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
      template: 'index.ejs',
    }),
  ],
};
