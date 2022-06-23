import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import TypeNav from '@/components/TypeNav';
import '@/mock/mockServer';
import "@/plugins/vue-awesome-swiper";


Vue.config.productionTip = false;
Vue.component(TypeNav.name, TypeNav);

new Vue({
  el: "#app",
  render: h=>h(App),
  router,
  store
})