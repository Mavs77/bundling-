


// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, //all this does is tell webpack that if it encounters an imported file ending with ".css", it should use the listed loaders to process that CSS file. 
        use: ["style-loader", "css-loader"], //webpack will run the loaders starting at the end. 
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }, 
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },       
    ],
  },
};



