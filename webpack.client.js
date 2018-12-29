const path = require('path');

// Create separate webpack bundle for the client side to maintain a layer of security 
// by avoiding the sharing of uneccessary information and only sharing neccessary assets
// eg. javascript code 
module.exports = {
    // Inform webpack about the root file for the client side 
    entry: './src/client',

    // Tell webpack where to place generated output file (bundle.js in to a public directory)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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
                    presets: [
                        "@babel/preset-react",
                        '@babel/preset-env',
                    ]
                },
            }
        ]
    }
};