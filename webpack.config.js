const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
  PUB:    path.resolve(__dirname, 'public'),
  CSS:    path.resolve(__dirname, 'src/css'),
  IMG:    path.resolve(__dirname, 'src/img')
}

module.exports = {
  entry: {
    'bundle': './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    // filename: '[name].js',
    filename: 'bundle.js',
  },
  devServer: {
    // contentBase: './public',
    contentBase: path.join(__dirname, 'public'),
    // contentBasePublicPath: '/assets',
    port: 4280,
    compress: true,
    stats: 'errors-only',
    historyApiFallback: { index: 'index.html' },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|eot|woff|woff2|ttf|pdf)$/,
        include: paths.IMG,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }],
      },
      {
        test: /\.html$/,
        include: paths.PUB,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, "public")
    // })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      PUB: paths.PUB,
      Style: paths.CSS,
      IMG: paths.IMG
    }
  }
};
