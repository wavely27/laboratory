const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const createConfig = () => {
  return {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new CleanWebpackPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      compress: true,
      port: 5800,
    },
  };
};
const config = createConfig();

module.exports = config;
