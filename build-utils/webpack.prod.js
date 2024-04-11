/* eslint-disable import/no-extraneous-dependencies */
const path = require("path")
const Dotenv = require("dotenv-webpack")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

module.exports = {
  mode: "production",
  output: {
    clean: true, // clean output directory before emit
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env.production"),
    }),
    new BundleAnalyzerPlugin({
      reportFilename: path.resolve(__dirname, "..", "./dist/report.html"),
      analyzerMode: "static"
    }),
  ],
  devtool: "source-map",
}
