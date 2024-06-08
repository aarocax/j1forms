const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const config = {
  entry: {
    form_host: './src/form-host/Application.ts',
    form_candidate: './src/form-candidate/Application.ts',
    scripts_host: './src/assets/js/scripts_host.js',
    scripts_candidate: './src/assets/js/scripts_candidate.js',
    styles: [
      path.resolve(__dirname, './src/assets/styles/app.scss'),
    ]
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist/js/'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            {
                loader: 'file-loader',
                options: { outputPath: '../css/', name: '[name].min.css'}
            },
            'css-loader'
        ]
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
            {
                loader: 'file-loader',
                options: { outputPath: '../css/', name: '[name].min.css'}
            },
            'sass-loader'
        ]
      }
    ]
  },
  plugins: [

    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: './assets',
          to: '../assets',
          context: "src/",
        },
        {
          from: './index_login.html',
          to: '../',
          context: "src/",
        },
        {
          from: './index_host.html',
          to: '../',
          context: "src/",
        },
        {
          from: './index_candidate.html',
          to: '../',
          context: "src/",
        },
        {
          from: './assets/php/upload.php',
          to: '../php',
          context: "src/",
        }
      ]
    })
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;