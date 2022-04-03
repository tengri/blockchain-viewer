const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const CopyWebpackPlugin = require('copy-webpack-plugin')

    module.exports = {
        mode: 'development',



      entry: ["./src/app/App.tsx", 'webpack-plugin-serve/client'],
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
            }]),
            new Serve({port: 3000, static: __dirname + '/dist'})
        ],

      module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                enforce: "pre",
                test: /\.tsx?$/,
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
