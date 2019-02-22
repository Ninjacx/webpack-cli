var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var htmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var is_dev = process.env.NODE_ENV === 'development';
var res = {
    target:'web',
    entry: path.join(__dirname,'index.js'),
    output: {
      filename:'bundle.js',
      path: path.join(__dirname,'dist')
    },
    module: {
      rules:[
        {

          test:/\.vue$/,
          loader:"vue-loader"
        },
        {
          test:/\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader","postcss-loader"
            ]
          })
        },
        {
          test:/\.(gif|jpg|png|jpeg)$/,
          use:[
            {
              loader: 'url-loader',
              options: {
                limit: 1024, //转成base64
                name: '[name].[ext]' //[hash]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: './index.css',//修改过的地方
        allChunks: true}),
        new htmlWebpackPlugin("styles.css"),
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
          template:'index.html'
    			// ,inject:'head',
        })
    ]
}
if(is_dev){
  res.devtool = '#cheap-module-eval-source-map'
    res.devServer = {
      port:'8000',
      host:'0.0.0.0',
      overlay: {
        errors:true,
      }
    }
}

module.exports = res;
