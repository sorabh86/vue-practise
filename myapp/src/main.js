import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import User from './components/User.vue';
import Index from './components/Index.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

Vue.use(VueRouter);
const router = new VueRouter({
	routes: [
		{path:'/', 		component:Index},
		{path:'/user', 	component:User}
	]
});

Vue.component('app-user', User);
Vue.component('app-nav', Nav);
Vue.component('app-footer', Footer);

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
});
