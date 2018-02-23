const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = env => {
  const buildDir = env.production ? 'docs' : 'dev';
  return {
    entry: {
      app: './src/docs.js'
    },
    output: {
      path: path.resolve(__dirname, buildDir),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }]
        },
        {
          test: /\.html$/,
          use: 'raw-loader'
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          loader: 'file-loader'
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.yml$/,
          use: ['json-loader', 'yaml-loader']
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdown-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/docs.html' }),
      new ExtractTextPlugin('styles.css'),
      new CleanWebpackPlugin(['docs'], {
        verbose: true,
        dry: env.production ? false : true
      })
    ]
  };
};

module.exports = config;
