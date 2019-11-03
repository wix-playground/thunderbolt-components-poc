const webpack = require('webpack')
const { resolve } = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  cache: true,
  target: 'node',
  entry: {
    bundle: ['./src/server.js'],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte'],
    alias: {
      svelte: resolve(__dirname, 'node_modules', 'svelte'),
    },
  },
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.(svelte|html)$/,
        // exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            generate: 'ssr'
          },
        },
      },
    ],
  },
  mode,
  devtool: prod ? false : 'source-map',
}
