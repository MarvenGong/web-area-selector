const path = require('path');
const WebpackBar = require('webpackbar');
const chalk = require('chalk');
module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.ts'),
    demo: path.resolve(__dirname, 'src/demo/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.tsx', '.js', 'less'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new WebpackBar({
      color: 'green',  // 默认green，进度条颜色支持HEX
      basic: true,   // 默认true，启用一个简单的日志报告器
      profile: false,  // 默认false，启用探查器。
      reporter: {
        change() {
          console.log(chalk.blue.bold('文件修改，重新编译'));
        },
        afterAllDone() {
          console.log(chalk.bgWhiteBright.green('编译完成，请在浏览器扩展页面加载 dist 目录进行调试'));
        },
      },
    })
  ],
  watchOptions: {
    // 设置不监听的⽂件或⽂件夹，默认为空
    ignored: /node_modules/,
    // ⽂件改变不会⽴即执⾏，⽽是会等待300ms之后再去执⾏
    aggregateTimeout: 300,
    // 原理是轮询系统⽂件有⽆变化再去更新的，默认1秒钟轮询1000次
    poll: 1000,
  },
};
