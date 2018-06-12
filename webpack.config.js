const webpack = require('webpack');
const path = require('path');

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
    path: paths.PUB,
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    contentBase: './public',
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
        test: /\.(png|jpg|gif|eot|woff|woff2|ttf)$/,
        include: paths.IMG,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'prototypes/misuite/amar/local/[path][name].[ext]' //full file path required for firebase
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
