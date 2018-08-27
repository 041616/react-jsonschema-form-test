module.exports = {
    mode: 'production',
    entry: {
        'index': __dirname + '/source/index.js'
    },
    output: {
        path: __dirname + '/build/',
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader'
                }, {
                    loader: 'eslint-loader',
                    options: {
                        cache: false
                    }
                }
            ],
        }],
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    },
};
