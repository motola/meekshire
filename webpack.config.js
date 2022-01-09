const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
        {
            test: /.css$/i,
            use: ['style-loader', 'css-loader']
        }, 
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            type:"asset/resource",
          },
    ]

    },
    devServer: {
        static : {
            directory : path.join(__dirname, "public"),
        },
        historyApiFallback: true,
         hot: "only",
     },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
    
}

 