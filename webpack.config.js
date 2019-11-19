const dotenv = require('dotenv').config();

const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const PUBLIC_PATH = process.env.PUBLIC_PATH;
const NODE_ENV = process.env.NODE_ENV;

module.exports = [
    {
        name: "web",
        entry: "./apps/web/src/index.tsx",
        output: {
            path: path.join(__dirname, "/dist/web"),
            filename: NODE_ENV === "production" ? "[name]-[contenthash].js" : "[name]-[hash].js",
            chunkFilename: NODE_ENV === "production" ? "[name]-[contenthash].js" : "[name]-[hash].js",
            publicPath: PUBLIC_PATH
        },
        resolve: {
            extensions: [".js", ".ts", ".tsx", ".scss"],
            alias: {
                "@skeleton/web": path.resolve(__dirname, "apps", "web", "src"),
                "@skeleton/domains": path.resolve(__dirname, "src", "domains"),
                "@skeleton/shared": path.resolve(__dirname, "src", "shared")
            }
        },
        plugins: [
            new CleanWebpackPlugin.CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                minify: {
                    minifyJS: true,
                    minifyCSS: true,
                    removeComments: true,
                    useShortDoctype: true,
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                },
            }),
            new MiniCSSExtractPlugin({
                filename: "[name]-[hash].css",
                ignoreOrder: false,
            }),
            new webpack.ContextReplacementPlugin(
                /moment[\/\\]locale$/,
                /(en-gb|id)/,
            ),
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(dotenv.parsed)
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: [
                        /node_modules/,
                    ],
                    use: ["babel-loader", "ts-loader"]
                },
                {
                    test: /\.(scss)$/,
                    use: [
                        MiniCSSExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(jpg|png|jpeg|svg)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[hash].[ext]',
                        },
                    },
                },
                {
                    test: /\.(woff|woff2|ttf|otf|eot)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: 'fonts',
                                name: '[name]-[hash].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /favicon\.ico$/,
                    use: '[name].[ext]',
                },
            ]
        },
        optimization: {
            splitChunks: {
                chunks: "all",
            }
        },
        devServer: {
            hot: false,
            inline: true,
            publicPath: PUBLIC_PATH,
            historyApiFallback: true,
            stats: 'minimal',
            clientLogLevel: 'warning',
        },
    }
];