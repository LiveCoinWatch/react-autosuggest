const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './demo/src/index',
  mode: 'production',

  output: {
    path: path.join(__dirname, 'demo', 'dist'),
    filename: 'index.js',
    clean: true, // Webpack 5 feature to clean the output directory
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'demo', 'src'),
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
        type: 'asset/resource', // Replaces file-loader and url-loader
        generator: {
          filename: 'images/[hash][ext][query]', // Defines custom output filename
        },
      },
    ],
  },

  resolve: {
    modules: ['node_modules', 'components', 'src'],
    fallback: {
      // Provide Webpack 5 fallbacks for Node.js core modules if necessary
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css',
    }),
    // DefinePlugin is often used to define environment variables
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
