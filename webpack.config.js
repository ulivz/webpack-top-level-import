const path = require("path");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devtool: 'source-map',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    minimize: false
  }
};
