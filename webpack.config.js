// For output.filename configuration:
//
// CHANGE "component-name" in this file to your real component name!
// DO NOT CHANGE "[name]", which denotes the entry property names that webpack automatically inserts for you!

module.exports = {
  entry: {
   dev: ['webpack/hot/dev-server', './demo/demo.js'],
   dist: ['./main.js']
  },
  output: {
    path: './',
    filename: 'build/[name].component-name.js',
    libraryTarget: 'umd'
  },
  devtool: 'cheap-module-source-map',
  contentBase: './demo', // for webpack dev server
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css?modules!sass' // sass -> css -> javascript -> inline style
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
