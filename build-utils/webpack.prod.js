/* eslint-disable import/no-extraneous-dependencies */
const path = require("path")
const Dotenv = require("dotenv-webpack")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // {
      //   test: /\.(png|jpg|gif|ttf|pdf|svg)$/,
      //   include: [paths.IMG, paths.PUB],
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[path][name].[ext]",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env.production"),
    }),
    new BundleAnalyzerPlugin({
      reportFilename: path.resolve(__dirname, "..", "./dist/report.html"),
      analyzerMode: "static"
    }),
    new MiniCssExtractPlugin(),
  ],
  devtool: "source-map",
}
