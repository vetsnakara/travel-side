const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app/assets/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "./app/tmp/scripts"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  }
};
