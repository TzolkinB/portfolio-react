// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require("webpack-merge")

// eslint-disable-next-line import/extensions
const commonConfig = require("./webpack.common.js")

module.exports = ({ env }) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const envConfig = require(`./webpack.${env}.js`)

  return merge(commonConfig, envConfig)
}
