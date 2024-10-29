/* eslint-disable import/no-extraneous-dependencies */
const path = require("path")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

module.exports = {
  mode: "production",
  output: {
    clean: true, // clean output directory before emit
  },
  plugins: [
    new BundleAnalyzerPlugin({
      reportFilename: path.resolve(__dirname, "..", "./dist/report.html"),
      analyzerMode: "static"
    }),
  ],
  devtool: "source-map",
}
