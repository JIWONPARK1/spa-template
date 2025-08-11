// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"), // 절대 경로로 지정
      filename: "[name].js",
      library: "MyApp",
      libraryTarget: "umd",
      clean: true, // 빌드 전 dist 폴더 클린
    },
    mode: isProd ? "production" : "development",
    devtool: isProd ? false : "inline-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 3000,
      liveReload: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader", // Babel 사용 시
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"], // CSS 로더 설정
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(), // 빌드 시 dist 폴더 정리
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify: isProd
          ? { collapseWhitespace: true, removeComments: true }
          : false,
      }),
    ],
    resolve: {
      extensions: [".js"],
    },
  };
};
