const path = require("path");

const config = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      react: "nervjs",
      "react-dom": "nervjs"
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    mainFields: ["main", "module"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
