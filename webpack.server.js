const path = require('path');

// Create webpack bundle for the express server
// to handle any transpiling that might be needed
module.exports = {
    // Inform webpack that we are building a bundle for nodejs
    // rather than for the browser
    target: 'node', 

    // Inform webpack about the root file of our express server application
    entry: './src/index.js',

    // Tell webpack where to place generated output file (bundle.js in build directory)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {   
                // regex expression to make sure babel is only ran on js files
                test: /\.js?$/,
                loader: 'babel-loader',
                // tell webpack what directories to exclude from running babel
                exclude: /node_modules/,
                // Options passed to babel-loader
                options: {
                    // Actual rules used by babel to transpile the code
                    // react to transpile jsx
                    // stage-0 to handle asynch code
                    // array with env preset used by webpack to meet requirements for latest two versions 
                    // of all popular browsers 
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: {browsers: ['last 2 versions']} }]
                    ]
                },
            }
        ]
    }
};