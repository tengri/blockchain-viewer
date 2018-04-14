const path = require('path');

module.exports = {
  entry: "./src/app/App.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      }, {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      }
    ]
  },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};