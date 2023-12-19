const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:path.resolve(__dirname,'..','./src/index.tsx'),
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    module:{
        rules:[
            {
                test:/\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:'babel-loader'
                    }
                ]
            },{
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../build'),
      },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'..','./src/index.html')
        })
    ]

}