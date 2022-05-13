const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // Modo de compilación
    mode: 'development',
    output: {
        clean: true,
    },
    module: {
        rules: [
            // Aquí van los loaders
            // Cargador de archivos HTML
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            // Cargador de archivos CSS
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi Webpack App',
            // filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            ignoreOrder: false
        })
    ],
}