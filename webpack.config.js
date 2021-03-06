module.exports = {
    entry: './index.jsx',
    output: {
        // path: './dist/js',
        filename: 'bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                //tell webpack to use js-loader for all *.js files
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        moduleDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    }
}