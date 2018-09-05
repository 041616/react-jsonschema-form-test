const path = require('path');

module.exports = {
    mode: 'development',
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
    externals : {
        react: 'React',
        'react-dom': 'ReactDOM',
        // 'prop-types': 'PropTypes',
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
        alias: {
            Schema: path.resolve(__dirname, 'source/Schema/'),
        },
    },
};
