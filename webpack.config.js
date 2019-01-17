// Webpack Configuration

module.exports = {
  // Define React entry point
  entry: './src/index.tsx',
  output: {
    // bundle.js will contain transpiled js
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      // TS and TSX files will be loaded with babel-loader
      {
        test: /\.tsx?$/,
        loader: 'babel-loader'
      },
      // JS files will be loaded with source-map-loader. Allows JS files to be debugged like TS files
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  }
};