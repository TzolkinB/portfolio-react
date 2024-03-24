module.exports = {
  mode: "production",
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx|ts|tsx)$/,
  //       exclude: /node_modules/,
  //       use: [
  //         {
  //           loader: "babel-loader",
  //           options: {
  //             presets: [["@babel/preset-env", { targets: "defaults" }]],
  //           },
  //         },
  //         "ts-loader",
  //       ],
  //     },
  //     {
  //       test: /\.css$/,
  //       use: ["style-loader", "css-loader"],
  //     },
  //     {
  //       test: /\.(png|jpg|gif|ttf|pdf|svg)$/,
  //       include: [paths.IMG, paths.PUB],
  //       use: [
  //         {
  //           loader: "file-loader",
  //           options: {
  //             name: "[path][name].[ext]",
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       test: /\.html$/,
  //       include: paths.PUB,
  //       use: [
  //         {
  //           loader: "file-loader",
  //           options: {
  //             name: "[name].[ext]",
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // plugins: [new ESLintPlugin()],
  devtool: "source-map",
}
