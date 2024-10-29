const path = require("path")

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
  devtool: "inline-source-map",
}
