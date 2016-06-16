const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      // Main: path.resolve(process.cwd(), 'app/components/Main.jsx' ),
      // applicationStyles: path.resolve(process.cwd(), 'app/styles/app.scss' ),
      // Navigation: path.resolve(process.cwd(), 'app/components/Navigation.jsx' ),
      // Timer: path.resolve(process.cwd(), 'app/components/Timer.jsx'),
      // Countdown: path.resolve(process.cwd(),'app/components/Countdown.jsx'),
      // Clock: path.resolve(process.cwd(), 'app/components/Clock.jsx'),
      CountdownForm: path.resolve(process.cwd(), 'app/components/CountdownForm.js')
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map' // Automatically create source maps
};
