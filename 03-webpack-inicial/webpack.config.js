const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
            // Cargador de archivos CSS, excluyendo style.css para que se cargue con el loader de MiniCssExtractPlugin
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            // Se habilita el cargador de archivos CSS para el archivo styles.css
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // Cargador de imagenes
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            }
        ]
    },
    optimization: {},
    plugins: [
        // Plugin para crear un archivo index.html con el contenido de la carpeta dist
        new HtmlWebpackPlugin({
            title: 'Mi Webpack App',
            // filename: 'index.html',
            template: './src/index.html'
        }),
        // Plugin para extraer CSS a un archivo aparte
        new MiniCssExtractPlugin({
            filename: "[name].css",
            ignoreOrder: false
        }),
        // Plugin para copiar archivos
        new CopyPlugin({
            patterns: [
                { from: './src/assets', to: 'assets' }
            ]
        }),
    ],
}