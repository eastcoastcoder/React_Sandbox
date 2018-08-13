const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonPaths = require('./common-paths');

const config = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: 'static/[name].[hash].js',
    publicPath: './'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.emotion\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?minimize&sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          ]
        })
      },
      {
        test: /emotion\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/styles.[hash].css',
      allChunks: true
    })
  ]
};

module.exports = config;
