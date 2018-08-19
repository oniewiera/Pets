const path = require('path');

module.exports = {
  entry: ["./js/main.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "main.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js"],
    modules: ['node_modules']
  }
};
