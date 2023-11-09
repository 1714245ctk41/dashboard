const path = require("path");
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, "public", "index.html"),
});
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  plugins: [
    htmlPlugin,
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ],
};
