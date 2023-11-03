const path = require('path');

module.exports = {
  entry: ['./demo/standalone/app'],
  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'demo', 'standalone'), // Output directory must be an absolute path
    filename: 'compiled.app.js', // Filename of the bundled output
    clean: true, // Cleans the output directory before each build
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'demo', 'standalone'), // Use resolve for absolute paths
        ],
      },
    ],
  },

  // Depending on your project's requirements, you may need to add resolve.fallback configuration here
};
