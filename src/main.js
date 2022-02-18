import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 import FastClick from 'fastclick'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// 解决移动端300毫秒的延迟
FastClick.attach  (document.body)
