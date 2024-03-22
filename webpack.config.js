const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// path: Node's built-in path module and it is prefixed with the __dirname global. https://nodejs.org/api/path.html
  // This prevents file path issues between operating systems and allows relative paths to work as expected.
// __direname: The directory name of the current module. https://nodejs.org/docs/latest/api/modules.html#__dirname
  // Example: running node example.js from /Users/mjr
  // console.log(__dirname);
  // Prints: /Users/mjr
// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

const paths = {
  PUB:    path.resolve(__dirname, 'build'),
  CSS:    path.resolve(__dirname, 'src/css'),
  IMG:    path.resolve(__dirname, 'src/img')
}

console.log('test-----', path.resolve(__dirname, 'build'),)
module.exports = {
  mode: 'development',
  entry: {
    'bundle': './src/app.js'
  },
  output: {
    // path: The output directory as an absolute path.
    path: path.resolve(__dirname, '/build'),
    publicPath: '/',
    // filename: the name of each output bundle.
    // The bundle is written to the directory specified by the output.path option.
    filename: 'bundle.js',
  },
  devServer: {
    // contentBase: Tell the server where to serve content from
    static: path.join(__dirname, 'build'),
    port: 4280,
    compress: true,
    client: {
      logging: 'error',
    },
    historyApiFallback: { index: 'index.html' },
  },
  performance: {
    maxAssetSize: 400,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|ttf|pdf|svg)$/,
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
      // title: 'Fierce Whiskers - Kim Bell',
      // favicon: './public/favicon.png',
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
