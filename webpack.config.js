var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [
    'src/assets/js/pages/main.js'
  ],
  mode: 'development',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ]
};