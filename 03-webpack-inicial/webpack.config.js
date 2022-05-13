const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Modo de compilación
    mode: 'development',
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
}