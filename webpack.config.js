const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/slides.js",
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|mp3|ttf|woff|woff2|eot|otf)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]-[contenthash].[ext]",
            outputPath: "assets",
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve("./dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {from: 'src/assets', to: 'assets'}
      ]
    })
  ],
};
