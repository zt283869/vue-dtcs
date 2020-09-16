import Vue from 'vue'
import Vuex from 'vuex'
import state from './echartData/state'
import * as getters from './echartData/getters'
import * as mutations from './echartData/mutations'
import * as actions from './echartData/actions'
Vue.use(Vuex)
// 注册上边引入的各大模块
const store = new Vuex.Store({
  state, // 共同维护的一个状态，state里面可以是很多个全局状态
  getters, // 获取数据并渲染
  actions, // 数据的异步操作
  mutations// 处理数据的唯一途径，state的改变和赋值都在这里
})

export default store
