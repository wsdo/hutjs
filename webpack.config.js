const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const paths = require('./build/paths')
module.exports = {
  entry: path.resolve(paths.PATH_SRC, 'index'),
  mode: 'production',
  output: {
    path: path.resolve(paths.PATH_DIST),
    filename: 'hutjs.min.js',
    library: 'hutjs',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
}
