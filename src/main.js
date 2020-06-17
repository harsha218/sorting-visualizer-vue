import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueApexCharts)

new Vue({
  render: h => h(App),
}).$mount('#app')
