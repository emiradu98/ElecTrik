let MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    devtool: 'none',
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCSSExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'webpack.tut.[contenthash].css'
        })
    ]
}