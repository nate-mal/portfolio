const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

plugins: [
  new FaviconsWebpackPlugin("/path/to/logo.png"), // svg works too!
];
module.exports = {
  mode: "production", //production
  entry: {
    main: path.resolve(__dirname, "src/js/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name].[contenthash][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 4041, //default 8080
    open: true,
    hot: true,
  },

  module: {
    rules: [
      //css
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      //images
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: "asset/resource" },
      //js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Personal Portfolio",
      filename: "index.html",
      template: path.resolve(__dirname, "src/temp.html"),
    }),
    new HtmlWebpackPlugin({
      title: "Thank you page",
      filename: "thanks.html",
      template: path.resolve(__dirname, "src/pages/thanks-page.html"),
    }),
    new FaviconsWebpackPlugin("src/img/favicon.png"), //works with svg too
    new MiniCssExtractPlugin(),
  ],
};
