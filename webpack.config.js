var webpack = require('webpack');

var config = {
  entry: './public/index.jsx',
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
     loaders: [
        {
           test: /\.jsx?/,
           loader: 'babel'
        }
     ]
 }

};

module.exports = config;
