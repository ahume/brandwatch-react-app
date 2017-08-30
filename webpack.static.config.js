const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: './src/static.js',
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: [
        /src/,
        /node_modules\/viziaauth/,
      ],
    }, {
      test: /\.ejs$/,
      use: ['ejs-loader'],
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true,
          },
        }, {
          loader: 'postcss-loader',
        }],
      }),
    }],
  },
  output: {
    filename: './assets/bundle.[hash].min.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin('public'),
    new ExtractTextPlugin({
      filename: './assets/bundle.[hash].min.css',
    }),
    new CopyWebpackPlugin([{
      from: './src/assets',
      to: './assets',
    }]),
    new webpack.DefinePlugin({
      __AUTH_AUDIENCE__: `"${process.env.AUTH_AUDIENCE}"`,
      __AUTH_DOMAIN__: `"${process.env.AUTH_DOMAIN}"`,
      __DEVELOPMENT__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new StaticSiteGeneratorPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
