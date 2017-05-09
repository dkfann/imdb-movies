const { resolve } = require('path');

module.exports = {
  entry: ['babel-polyfill', '.'],
  output: {
    libraryTarget: 'umd',
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    umdNamedDefine: true
  },
  context: resolve(__dirname, 'src'),
  module: {
    loaders: [{
      test: /\.js/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  externals: [{
    'isomorphic-fetch': {
      root: 'isomorphic-fetch',
      commonjs2: 'isomorphic-fetch',
      commonjs: 'isomorphic-fetch',
      amd: 'isomorphic-fetch'
    }
  }]
}
