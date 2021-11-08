const path = require('path'); // Nos permite saber donde esta ubicado el proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); //traemos el plugin de html

module.exports = {
    entry: './src/index.js', // punto de entrada
    output: { //lugar al que saldran todos los proyectos
        path: path.resolve(__dirname, 'dist'), // se crea la carpeta dist
        filename: 'bundle.js', //nombre del archivo resultante
    },
    resolve: {
        extensions: ['.js', '.jsx'], //extensiones que tendran que resolverse
    },
    module: {
        rules: [ // reglas para usar
            {
                test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
                exclude: /node_modules/, // siempre excluir node modules 
                use: { // indicamos el loader
                    loader: 'babel-loader' // babel 
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // archivo raíz a transformar
            filename: './index.html' // el archivo resultante
        })
    ]


}