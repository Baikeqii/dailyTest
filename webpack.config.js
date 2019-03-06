/**
 * Created by Administrator on 2019/3/4 0004.
 */
const webpack = require("webpack"),
    path = require("path"),
    config = {
        entry: "./src/index.js",
        mode: "development",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "firstWebpack.bundle.js"
        },
        watch: true,
        devServer: {
            hot: true,
            inline: true,
            publicPath: '/dist/js/',
            contentBase: './',
            //自定义端口号
            port: '1000',
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: "/\.(js|jsx)$/",
                    exclude: "/node_modules/",
                    use: "babel-loader"
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: 'images/[name].[hash].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(css|scss)$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                },
            ]
        }
    };

module.exports = config;