// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")
// eslint-disable-next-line import/no-extraneous-dependencies
const ESLintPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');


// path: prefixed with the __dirname global. https://nodejs.org/api/path.html
// This prevents file path issues between operating systems and allows relative paths to work as expected.
// __direname: The directory name of the current module. https://nodejs.org/docs/latest/api/modules.html#__dirname
// Example: running node example.js from /Users/mjr
// console.log(__dirname);
// Prints: /Users/mjr
// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

const paths = {
  PUB: path.resolve(__dirname, "..", "dist"),
  CSS: path.resolve(__dirname, "..", "src/assets/css"),
  IMG: path.resolve(__dirname, "..", "src/assets/img"),
}

console.log("test-----", path.resolve(__dirname, "..", "dist"))
module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    publicPath: "/",
    // filename: the name of each output bundle.
    // The bundle is written to the directory specified by the output.path option.
    filename: "bundle.js",
  },
  devServer: {
    static: path.resolve(__dirname, "..", "./dist"),
    port: 4280,
    compress: true,
    client: {
      logging: "error",
    },
    historyApiFallback: { index: "index.html" },
  },
  performance: {
    maxAssetSize: 400,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "defaults" }]],
            },
          },
          "ts-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|ttf|pdf|svg)$/,
        include: [paths.IMG, paths.PUB],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        include: paths.PUB,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
      title: "Kim Bell - SDET",
      favicon: path.resolve(__dirname, "..", "./src/assets/img/favicon.png"),
    })],
  resolve: {
    extensions: [".*", ".js", ".jsx", ".tsx", ".ts"],
    alias: {
      PUB: paths.PUB,
      Style: paths.CSS,
      IMG: paths.IMG,
    },
  },
}
