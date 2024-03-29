const webpack = require('webpack')
const { resolve } = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  cache: true,
  target: 'web',
  node: false,
  entry: {
    bundle: ['./src/client.js'],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte'],
    alias: {
      svelte: resolve(__dirname, 'node_modules', 'svelte'),
      'svelte-app-components': resolve(__dirname, 'node_modules', 'svelte-app-components', 'dist', 'client'),
    },
  },
  output: {
    path: resolve(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      {
        test: /\.(svelte|html)$/,
        // exclude: /node_modules/,
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
