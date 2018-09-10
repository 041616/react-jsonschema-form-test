const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'index': path.join(__dirname, '/source/index.js'),
        'schema': path.join(__dirname, '/source/Schema/index.js')
    },
    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'js/[name].js',
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
