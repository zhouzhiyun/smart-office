  const path = require('path');

  module.exports = {
      entry: './src/main.js',
      output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'dist'),
          publicPath: '/',
          productionSourceMap: true
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
                      'url-loader?limit=8192?name=utils.assetsPath("c/image/[name].jpg")'
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