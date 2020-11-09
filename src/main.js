import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.css'
import './plugins/element.js'
import store from './store'

Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
