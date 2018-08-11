import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});
/// random color
Vue.directive('randomcolor',{
  bind(el, binding, vnode){
    el.style.color= "#"+ Math.random().toString().slice(2,8);
  }
});
// shrink 
Vue.filter('snippet',function(value){
  return value.slice(0,100)+"....";
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
