const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "hidden-source-map",
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
        },
        usedExports: true,
        minimize: true,
    },
    output: {
        filename: "[name].bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
});
