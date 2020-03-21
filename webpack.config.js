module.exports = {
    mode: 'development',
    entry: './app/main.js',
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: 'app/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    }
};
