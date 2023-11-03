const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: './demo/src/index',

  output: {
    path: path.join(__dirname, 'dist'), // Must be an absolute path
    filename: 'index.js',
    publicPath: '/demo/dist/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'src'), // Must be an absolute path
          path.join(__dirname, 'demo', 'src'), // Must be an absolute path
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                paths: [path.resolve(__dirname, 'demo', 'src')],
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset', // Webpack 5 feature to replace url-loader/file-loader
        parser: {
          dataUrlCondition: {
            maxSize: 8192, // 8kb
          },
        },
      },
    ],
  },

  resolve: {
    modules: [
      'node_modules',
      'components',
      'src',
      path.join(__dirname, 'demo', 'src'), // Must be an absolute path
    ],
    fallback: {
      // Add fallbacks for node modules if necessary
    },
  },

  devtool: 'source-map',

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css',
    }),
  ],

  // webpack-dev-server configuration
  devServer: {
    hot: true,
    host: process.env.NODE_HOST || 'localhost',
    port: process.env.NODE_PORT || 3000,
  },
};
