const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

let libraryName = pkg.name;
let outputFile = libraryName + '.js';

const config = env => {
  return {
    entry: './src/index.js',
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
            { loader: 'ngtemplate-loader', options: { relativeTo: 'src/'} },
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
              loader: 'babel-loader',
              options: {
                presets: ['env'],
                plugins: [require('babel-plugin-angularjs-annotate')]
              }
            },
            { loader: 'eslint-loader' }
          ]
        }
      ]
    }
  };
};

module.exports = config;
