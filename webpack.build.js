const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

let libraryName = '[name]';
let outputFile = libraryName + '.js';

const config = env => {
  return {
    entry: {
      'angular-strap': './src/index.js',
      'angular-strap.tpl': './src/templates.js'
    },
    output: {
      path: path.resolve(__dirname, 'release'),
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      angular: {
        commonjs: 'angular',
        commonjs2: 'angular',
        amd: 'angular',
        root: 'angular'
      }
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true,
                removeComments: true,
                collapseWhitespace: true
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader'
            },
            { loader: 'eslint-loader' }
          ]
        }
      ]
    }
  };
};

module.exports = config;
