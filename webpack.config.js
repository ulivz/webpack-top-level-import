const path = require("path");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: "production",
  entry: "./src/a.js",
  devtool: 'source-map',
  target: ['web', 'es6'],
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
