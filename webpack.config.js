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

    // Config 1: For browser environment
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
            filename: 'vue-tube.min.js',
            libraryTarget: 'window',
            library: 'VueTube'
        }
    }),
  
    // Config 2: For Node-based development environments
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/VueTube.vue'),
        output: {
          filename: 'vue-tube.js',
          libraryTarget: 'umd',
    
          // These options are useful if the user wants to load the module with AMD
          library: 'vue-tube',
          umdNamedDefine: true
        }
    })
];