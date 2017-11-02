// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import routerConfig from './router.config.js';
import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter(routerConfig);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
