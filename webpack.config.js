// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    static: {
      directory: resolve(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [resolve(__dirname, 'src'), resolve(__dirname, 'node_modules')],
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
  },
};
