var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD = process.env.NODE_ENV === 'production'

module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/app'),
        publicPath: "/app/"
    },
    context: __dirname,
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['react', 'es2015'],
                plugins: [
                    'transform-object-rest-spread'
                ]
            }
        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',    // where the fonts will go
                }
            }]
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'images/'
                }
            }]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        /**
         * Used for CSS files to extract from JavaScript
         * Reference: https://github.com/webpack/extract-text-webpack-plugin
         */
        new ExtractTextPlugin({
            filename: BUILD ? '[name].[hash].css' : '[name].bundle.css'
        }),
        new LiveReloadPlugin({appendScriptTag: true})
    ]
};
