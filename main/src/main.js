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
    name: 'microApp1', // app name registered
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app1',
  },
]);

start();

new Vue({
  render: h => h(App),
}).$mount('#app')
