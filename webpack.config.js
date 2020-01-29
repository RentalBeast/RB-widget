const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss|.css$/,
                use: [
                    {
                        loader: require.resolve('style-loader')
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true
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
                        loader: require.resolve('ts-loader')
                    }
                ],
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
    }
};
