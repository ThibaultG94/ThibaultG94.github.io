const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [{
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
},
{
    entry: "./bubbleGame/bubble.js",
    output: {
      path: path.resolve(__dirname, "dist/bubbleGame"),
      filename: "bundleBubble.js",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./bubbleGame/bubble.html",
        filename: "bubble.html",
      }),
    ],
  },
];
