import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCompositionAPI from '@vue/composition-api'
import '@/icons'
import '@/router/permission'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueCompositionAPI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
