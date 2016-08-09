'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const postcss = [
  require('autoprefixer')({
    browsers: ['last 2 versions', 'ie > 8']
  })
];

module.exports = {
  entry: ['./frontend/main.js'],
  output: {
    path: __dirname + '/../public',
    filename: 'build/js/[name].js?[hash:8]',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      }
    ]
  },
  babel: {
    babelrc: false,
    presets: [
      ['es2015', {modules: false}],
      'stage-1'
    ]
  },
  postcss,
  vue: {
    loaders: {},
    postcss
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'feathers-vuejs',
      template: __dirname + '/../frontend/index.html',
      filename: './index.html'
    })
  ]
};
