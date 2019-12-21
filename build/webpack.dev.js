const path = require('path')
const paths = require('./paths')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.resolve(paths.PATH_SRC, 'index.ts'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: 'hutjs.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: './example',
    library: 'hutjs',
    libraryTarget: 'umd'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'hutjs library',
      template: path.resolve(paths.PATH_EXAMPLE, 'index.html'),
      inject: 'head'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.PATH_DIST,
    open: true,
    host: 'localhost',
    port: 8091,
    compress: true,
    historyApiFallback: true,
    hot: true
  }
}
