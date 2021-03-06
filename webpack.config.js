
module.exports = {
    entry: {
        main: "./src/js/index.js",
    },
    output: {
        path: '.',
        filename: "./dist/js/[name].js"
    },
    module: {
        loaders: [
            {
                test: /js[\/|\\]lib[\/||\\][\w|\.|_|-]+js$/,
                loader: 'url-loader?importLoaders=1&limit=1000&name=/dist/js/lib/[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|js[\/|\\]lib[\/||\\][\w|\.|_|-]+js$)/,
                loader: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.hbs/,
                loader: "handlebars-loader"
            }
        ]
    },
    resolve: {
        alias: {
            'zepto': './lib/zepto.min.js'
        }
    },
    plugins: [
        
    ],
    externals: {
        '$':'window.$',
        'global' : 'window.global'
    }
};
