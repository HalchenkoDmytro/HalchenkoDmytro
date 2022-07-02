const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  //mode: 'productionn',
  output: {
    filename: 'main.js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },


  devServer: {
    static: './dist',
  },

}