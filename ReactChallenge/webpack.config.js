const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
      //  test: /\.m?js$/,
        test: /(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
    },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "./src/index.html"),
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
  },
  performance: {
      hints:false
  },
  devtool: "source-map",
};
