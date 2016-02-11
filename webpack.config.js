var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SplitByPathPlugin = require('webpack-split-by-path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
console.log("Targeting %s, dirname %s", TARGET, __dirname);
process.env.BABEL_ENV = TARGET;

const PATHS = {
    entryFile: path.join(__dirname, 'index.js'),
    app: __dirname,
};

var common = {
    resolve: {
        root: PATHS.app,
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
        loaders: [
          {
              test: /\.jsx?$/,
              loaders: ['react-hot-loader','babel'],
              include: PATHS.app,
               exclude: path.join(__dirname,'node_modules')
          }
        ]
    },
    plugins: [
        new WebpackBuildNotifierPlugin(),
         new HtmlWebpackPlugin()
    ],
};
if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        entry: [
          'webpack-dev-server/client?http://localhost:3003',
          'webpack/hot/only-dev-server',
          'babel-polyfill',
          PATHS.entryFile
        ],
        devServer: {
            publicPath: "/",
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            // display only errors to reduce the amount of output
            stats: 'errors-only',

            host: 'localhost',
            port: 3003,
        },
        output: {
            filename: '[name].js',
            publicPath: '/'
        },
        devtool: 'eval-source-map',
        module: {
            loaders: [
                // Define development specific CSS setup
                {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: PATHS.app
                }
            ]
        },       
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
        ]
    });
}
