import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import vueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(vueAxios, axios)
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);

router.beforeEach((to,from, next)=>{
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

Vue.config.productionTip = false

