const { resolve } = require('path');

module.exports = {
  entry: '.',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  context: resolve(__dirname, 'src'),
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/], use: [{ loader: 'babel-loader', options: { presets: ['latest'] }, }] }
    ]
  }
}
