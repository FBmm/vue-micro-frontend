import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.scss'
import { registerMicroApps, start } from 'qiankun';

Vue.use(ElementUI);
Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'micro app1', // app name registered
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app1',
  },
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#yourContainer2',
  //   activeRule: '/yourActiveRule2',
  // },
]);

start();

new Vue({
  render: h => h(App),
}).$mount('#app')
