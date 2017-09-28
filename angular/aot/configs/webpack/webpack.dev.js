const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');

const helpers = require('./helpers');

const IS_DEV_SERVER = process.env.DEV_SERVER;



console.log('WEBPACK IS RUNNING IN DEV MODE');

if (IS_DEV_SERVER) {
    console.log('WEBPACK IS RUNNING IN DEV SERVER MODE');
}
console.log('------------------------------');



module.exports = function(options) {
    let cfg = webpackMerge(commonConfig(), {
        devtool: 'cheap-module-eval-source-map',

        output: {
            path: helpers.root('dist'),
            // publicPath: '/assets/',
            filename: '[name].bundle.js',
            sourceMapFilename: '[name].bundle.map',
            chunkFilename: '[id].chunk.js'
        },

        plugins: [
            new ExtractTextPlugin('[name].css')
        ]
    });

    if (IS_DEV_SERVER) {
        cfg.devServer = {
            historyApiFallback: true,
            stats: 'minimal',
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }
        }
    }

    return cfg;
};