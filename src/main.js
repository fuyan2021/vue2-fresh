import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import Vant from 'vant';
import 'vant/lib/index.css';
import './index.css';
import store from './store/index';
Vue.use(Vant)



Vue.config.productionTip = false;
Vue.filter('fMoney', (money)=> {
  let num = money/100;
  return num.toFixed(2);
});
new Vue({
    // 把router挂载到vue实例
    router,
    store,
    render: h => h(App),
  }).$mount('#app')