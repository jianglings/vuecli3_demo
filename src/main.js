import Vue from 'vue'
import App from './App.vue'
import header from './components/common/header.vue'
import footer from './components/common/footer.vue'

Vue.config.productionTip = false


//定义两个全局组件
Vue.component('app-header',header)
Vue.component('app-footer',footer)

new Vue({
  render: h => h(App),
}).$mount('#app')
