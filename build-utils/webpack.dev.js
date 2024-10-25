const path = require("path")
// eslint-disable-next-line import/no-extraneous-dependencies
// const Dotenv = require("dotenv-webpack")

module.exports = {
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "..", "./dist"),
    port: 4280,
    open: true, // open browser after server started
    compress: true,
    client: {
      logging: "error",
    },
    historyApiFallback: { index: "index.html" },
  },
  // plugins: [
  //   new Dotenv({
  //     path: path.resolve(__dirname, "..", "./.env.development"),
  //   }),
  // console.log("dev path----", new Dotenv({
  //     path: path.resolve(__dirname, "..", "./.env.development"),
  //   }),
  // )
  // ],
  devtool: "inline-source-map",
}
