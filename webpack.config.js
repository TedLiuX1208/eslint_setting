/* eslint-disable */
let path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirnamem, './dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['bable-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
/* eslint-disable */
