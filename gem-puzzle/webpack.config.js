let path = require('path');

let conf = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.bundle.js',
        publicPath: 'dist/',
    },
    devServer: {
        client: {
            overlay: true
        },
        static: {
            directory: path.join(__dirname, ''),
        }        
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            // CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    devtool: 'source-map',    
};

module.exports = conf;