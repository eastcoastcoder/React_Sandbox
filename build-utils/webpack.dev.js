const webpack = require('webpack');

const commonPaths = require('./common-paths');

const port = process.env.PORT || 3000;

const config = {
  mode: 'development',
  entry: {
    app: `${commonPaths.appEntry}/index.js`
  },
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.emotion\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        ]
      },
      {
        test: /\.emotion\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    hot: true,
    open: true
  }
};

module.exports = config;
