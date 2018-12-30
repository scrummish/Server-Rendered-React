const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

// Create webpack bundle for the express server
// to handle any transpiling that might be needed
const config = {
    // Inform webpack that we are building a bundle for nodejs
    // rather than for the browser
    target: 'node', 

    // Inform webpack about the root file of our express server application
    entry: './src/index.js',

    // Tell webpack where to place generated output file (bundle.js in build directory)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};

module.exports = merge(baseConfig, config);