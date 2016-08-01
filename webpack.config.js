var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname);
var JS_APP_PATH = path.resolve(ROOT_PATH, 'js');
var CSS_APP_PATH = path.resolve(ROOT_PATH, 'css');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    devtool: 'source-map',

    entry: './js/script.js',

    output: {
        path: BUILD_PATH,
        filename: 'main.min.js'
    },

    devServer: {
        publicPath: "/dist/"
    },

    module: {
        // noParse: /node_modules\/hls.js\/dist\/hls.js/,
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: JS_APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css', 'postcss', 'sass'],
                include: CSS_APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

    postcss: [
        autoprefixer({
            browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7']
        })
    ]
};