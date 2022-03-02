import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import Vant from 'vant';
import 'vant/lib/index.css';
import './index.css'
Vue.use(Vant)



Vue.config.productionTip = false
new Vue({
    // 把router挂载到vue实例
    router,
    render: h => h(App),
  }).$mount('#app')