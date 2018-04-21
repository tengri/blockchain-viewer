    const path = require('path');
    const CopyWebpackPlugin = require('copy-webpack-plugin')

    module.exports = {
        mode: 'development',
      entry: "./src/app/App.tsx",
      output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
      },

      devtool: "source-map",

      resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", "html"]
      },

        plugins: [
            new CopyWebpackPlugin([{
                from: 'src/index.html'
            }])
        ],

      module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                enforce: "pre",
                test: /\.ts$/,
                loader: "source-map-loader",
            },
            {
                test: /\.html?$/,
                loader: "ts-loader",
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
        ],
      }
    };