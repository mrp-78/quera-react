module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
