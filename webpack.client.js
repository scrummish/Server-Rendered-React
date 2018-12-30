const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

// Create separate webpack bundle for the client side to maintain a layer of security 
// by avoiding the sharing of uneccessary information and only sharing neccessary assets
// eg. javascript code 
const config = {
    // Inform webpack about the root file for the client side 
    entry: './src/client',

    // Tell webpack where to place generated output file (bundle.js in to a public directory)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);