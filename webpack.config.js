const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CheckerPlugin} = require('awesome-typescript-loader')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'zeit-ui',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.styl', '.stylus'],
    alias: {
      stylesheets: path.resolve(__dirname, 'styles'),
      examples: path.resolve(__dirname, 'examples'),
      lib: path.resolve(__dirname, 'lib'),
    },
    modules: [path.resolve(__dirname, 'include'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: [{loader: 'tslint-loader'}],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve(__dirname, 'svgs'),
        options: {
          symbolId: '[name]-icon'
        }
      },
      {
        test: /\.(eot|woff(2)?|ttf|svg)$/,
        loader: 'file-loader',
        exclude: path.resolve(__dirname, 'svgs'),
      },
      {
        test: /\.md$/,
        loader: 'text-loader',
      },
      {
        test: /\.(styl|stylus|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !devMode
            }
          },
          'css-loader',
          'stylus-loader',
        ]
      }
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
}
