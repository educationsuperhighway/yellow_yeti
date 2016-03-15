var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'react');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR + '/javascripts',
    filename: 'bundle.js'
  },
  externals: {
    "jquery": "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-0"]
        },
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
