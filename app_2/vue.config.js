const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const packageName = "microApp2";
module.exports = {
  devServer: {
    port: 8002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  configureWebpack: {
    name: packageName,
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
  }
}