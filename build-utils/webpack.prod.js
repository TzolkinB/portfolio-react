/* eslint-disable import/no-extraneous-dependencies */
const path = require("path")
const Dotenv = require("dotenv-webpack")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  module: {
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env.production"),
    }),
    new BundleAnalyzerPlugin({
      reportFilename: path.resolve(__dirname, "..", "./dist/report.html"),
      analyzerMode: "static"
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: "source-map",
}
