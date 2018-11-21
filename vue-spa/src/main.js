import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);


import 'bootstrap/dist/css/bootstrap.css'

global.jQuery = require('jquery');

var $ = global.jQuery;
window.$ = $;
new Vue({
  el: '#app',
  render: h => h(App)
})
