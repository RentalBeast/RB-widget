const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.scss|.css$/,
                loaders: [
                    {
                        loader: require.resolve('style-loader'),
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]',
                            sourceMap: true
                        },
                    },
                    require.resolve('resolve-url-loader'),
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    }, 'source-map-loader'
                ],
                enforce: "pre",
                exclude: /node_modules/,
            },
            {
                test: /\.(eot|ttf|woff|svg|gif|woff2)$/,
                loader: "file-loader",
            },
        ],
    },
    devServer: {
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/public/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.scss', '.css', '.d.ts', 'eot', 'woff', 'svg', 'gif'],
        alias: {
            "~": path.resolve(__dirname, 'node_modules/')
        }
    },
    devtool: "source-map"
}
