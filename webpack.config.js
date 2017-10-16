  const path = require('path');

  module.exports = {
      entry: './src/main.js',
      devtool: 'inline-source-map',
      output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'dist'),
          publicPath: '/'
      },
      module: {
          rules: [{
                  test: /\.css$/,
                  use: [
                      'style-loader',
                      'css-loader'
                  ]
              },
              {
                  test: /\.(png|svg|jpg|gif)$/,
                  use: [
                      'file-loader',
                      'url-loader'
                  ]
              },
              {
                  test: /\.(woff|woff2|eot|ttf|otf)$/,
                  use: [
                      'file-loader'
                     
                  ]
              },
              {
                  test: /\.vue$/,
                  use: [
                      'vue-loader'
                  ]
              }
          ]
      }
  };