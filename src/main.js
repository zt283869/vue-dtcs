import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import axios from 'axios';
import ElementUI from 'element-ui';
import echarts from 'echarts';
import router from './router'
import store from './store'
import VueResource from 'vue-resource';
import '../static/css/theme-green/index.css';       // 浅绿色主题
import Validator from 'vue-validator'
import "babel-polyfill";
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
Vue.use(Validator)
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.prototype.$axios = axios;

new Vue({
  // verify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
