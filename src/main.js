import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import FeatherIcons from 'vue-feather-icons'; 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Toast, BootstrapVue, FeatherIcons);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
