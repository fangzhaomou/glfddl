import '../other/reset.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Contactus from '../vue/contactus.vue'

/*Vue.use(VueRouter);*/
Vue.use(ElementUI)

/*const routes = [ 
	{
		path:"/",
		component:CableHome
	},
	{
		path:"/item",
		component:CableItem
	}
]*/

/*const router = new VueRouter({
  routes
})*/

const app = new Vue({
	el:"#contactus",
    render: h => h(Contactus)
})