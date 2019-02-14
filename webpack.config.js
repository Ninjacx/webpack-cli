var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var htmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
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
          use:['style-loader','css-loader']
        },
        {
          test:/\.(gif|jpg|png|jpeg)$/,
          use:[
            {
              loader: 'url-loader',
              options: {
                limit: 1024, //转成base64
                name: '[name][hash].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        // new webpack.DefinePlugin({
        //   'process.env': {
        //     NODE_ENV:is_dev ?'"development"':'"production"'
        //   }
        // }),
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
          template:'index.html'
    			// ,inject:'head',
        })
    ]
}
if(is_dev){
  res.devtool = '#cheap-module-eval-source-map'
  res.devServer={
    port:'8000',
    host:'0.0.0.0',
    overlay: {
      errors:true,
    }
  }
}

module.exports = res;
