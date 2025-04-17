const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 环境变量
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
    clean: true, // 构建前清理输出目录
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'), // 添加src目录别名
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 添加图片和字体支持
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico', // 如果有favicon
      minify: isProduction, // 生产环境下压缩HTML
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3001,
    open: true,
    hot: true, // 启用热模块替换
    historyApiFallback: true, // 支持单页应用
  },
  mode: isProduction ? 'production' : 'development',
  // 生产环境优化
  optimization: {
    minimize: isProduction,
    splitChunks: isProduction ? {
      chunks: 'all',
      name: false,
    } : false,
  },
  // 生产环境不需要source map，开发环境使用cheap-module-source-map
  devtool: isProduction ? false : 'cheap-module-source-map',
}; 