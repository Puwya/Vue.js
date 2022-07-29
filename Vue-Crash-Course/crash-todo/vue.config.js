const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // devServer: {
  //   proxy: {
  //     '^/api': {
  //       target: 'https://task-tracker-los.herokuapp.com/tasks',
  //       changeOrigin: true,
  //       logLevel: 'debug',
  //       pathRewrite: { '^/api': '/' },
  //     },
  //   },
  // },
  transpileDependencies: true
})
