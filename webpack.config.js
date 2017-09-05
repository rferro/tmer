
const path = require('path')
const webpack = require('webpack')

const pkg = require('./package')

const lib = path.resolve(__dirname, 'lib')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
  entry: {
    [pkg.name]: lib,
    [`${pkg.name}.min`]: lib
  },
  output: {
    path: dist,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: pkg.name
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: lib,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `${pkg.name} v${pkg.version}`
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/
    })
  ]
}
