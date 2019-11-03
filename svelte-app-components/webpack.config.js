const webpack = require('webpack')
const { resolve } = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  cache: true,
  target: 'web',
  node: false,
  entry: {
    bundle: ['./src/index.js'],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte'],
    alias: {
      svelte: resolve(__dirname, 'node_modules', 'svelte'),
    },
  },
  output: {
    path: resolve(__dirname, 'dist', 'client'),
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(svelte|html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hydratable: true
          },
        },
      },
    ],
  },
  mode,
  devtool: prod ? false : 'source-map',
}
