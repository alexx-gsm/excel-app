const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.[hash].js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'src/assets'),
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyPlugin({
      patterns: [{from: 'src/assets', to: ''}],
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css',
    }),
  ],
}
