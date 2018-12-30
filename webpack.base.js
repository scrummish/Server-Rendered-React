module.exports = {
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
}