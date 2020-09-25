const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test:/\.vue$/, use: 'vue-loader' },
      { test:/\.css$/, use: ['vue-style-loader' , 'css-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html'
    }),
      new VueLoaderPlugin( ),
    ]
};