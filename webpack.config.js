const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var commonConfig = {
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: __dirname,
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          loader: 'style!less!css'
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin( {
        minimize : true,
        sourceMap : false,
        mangle: true,
        compress: {
          warnings: false
        }
      })
    ]
  };

module.exports = [

    // 설정 1: 브라우저 환경에서 CDN으로 사용하기 위해
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
            filename: 'youtube-vue.min.js',
            libraryTarget: 'window',
            library: 'YoutubeVue'
        }
    }),
  
    // Config 2: npm install로 참조하여 사용하기 위해
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/examples/youtube-vue-demo/src/components/YoutubeVue.vue'),
        output: {
          filename: 'youtube-vue.js',
          libraryTarget: 'umd',
          library: 'youtube-vue',
          umdNamedDefine: true
        }
    })
];