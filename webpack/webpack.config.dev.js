const path = require('path');
const webpack = require('webpack');

const entryPath = path.join(__dirname, '..', 'app/index.jsx');
const assetsPath = path.join(__dirname, '..', 'public/build');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    entryPath
  ],
  devtool: 'eval-source-map',
  output: {
    path: assetsPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '..', 'app'),
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname, '..')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.join(__dirname, '..', 'app')
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
        include: path.join(__dirname, '..')
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
        include: path.join(__dirname, '..')
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
        include: path.join(__dirname, '..')
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
        include: path.join(__dirname, '..')
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
        include: path.join(__dirname, '..')
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
        include: path.join(__dirname, '..')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    inline: true,
    contentBase: 'public',
    hot: true,
    historyApiFallback: true
  }
};

