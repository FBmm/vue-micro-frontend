import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.scss'
import { registerMicroApps, start, addGlobalUncaughtErrorHandler } from 'qiankun';

let app;
function renderMain() {
  Vue.use(ElementUI);
  Vue.config.productionTip = false
  app = new Vue({
    data() {
      return {
        loading: true
      }
    },
    render(h) { 
      return (
        <App loading={this.loading}/>
      )
    },
  }).$mount('#app')
}

function initMicroApps() {
  registerMicroApps([
    {
      name: 'microApp1', // app name registered
      entry: '//localhost:8001',
      container: '#sub-container',
      activeRule: '/app1',
      loader: (loading) => {
        app.loading = loading
      }
    },
    {
      name: 'microApp2', // app name registered
      entry: '//localhost:8002',
      container: '#sub-container',
      activeRule: '/app2',
      loader: (loading) => {
        app.loading = loading
      }
    }
  ]);

  start();

  addGlobalUncaughtErrorHandler(e => {
    app.loading = false
  });
}

renderMain();
initMicroApps();