const { resolve } = require('path');

module.exports = {
  entry: '.',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  context: resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['latest'] },
        }],
      }
    ]
  }
}
