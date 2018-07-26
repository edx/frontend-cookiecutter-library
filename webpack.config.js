'use strict';

const path = require('path');

module.exports = {
  entry: './cookie.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
