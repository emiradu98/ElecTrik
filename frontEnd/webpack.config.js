let webpackMerge = require('webpack-merge');

let HTMLWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({mode}) => {
    return webpackMerge({
        entry: ['./src/app.js'],
        devServer: {
            historyApiFallback: {
                index: 'index.html'
            }
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: 'index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new CopyWebpackPlugin(
                [
                    {
                        from: './src/assets/',
                        to: 'assets/'
                    }
                ]
            )
        ],

    }, require(`./build-utils/webpack.${mode}`))
}
