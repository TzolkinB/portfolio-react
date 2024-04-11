const path = require("path")
// eslint-disable-next-line import/no-extraneous-dependencies
const Dotenv = require("dotenv-webpack")

module.exports = {
  mode: "development",
  devServer: {
    open: true, // open browser after server started
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env.development"),
    }),
  ],
  devtool: "eval-source-map",
}
