const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    entry: './src/index.js',
    mode: 'production',

    output: {
      path: path.resolve(__dirname, 'dist', 'standalone'), // Use resolve for absolute paths and specify only directory in path
      filename: 'autosuggest.js',
      library: {
        name: 'Autosuggest',
        type: 'umd',
      },
      clean: true, // Webpack 5 option to clean the output directory
      globalObject: 'this', // For universal library compatibility
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [
            path.resolve(__dirname, 'src'), // Using resolve to ensure absolute path
          ],
        },
      ],
    },

    externals: {
      react: 'React',
    },
  },
  {
    entry: './src/index.js',
    mode: 'production',

    output: {
      path: path.resolve(__dirname, 'dist', 'standalone'),
      filename: 'autosuggest.min.js',
      library: {
        name: 'Autosuggest',
        type: 'umd',
      },
      clean: true,
      globalObject: 'this',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [path.resolve(__dirname, 'src')],
        },
      ],
    },

    externals: {
      react: 'React',
    },

    plugins: [
      // DefinePlugin remains unchanged as it does not have breaking changes for webpack 5
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
  },
];
