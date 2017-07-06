import '../other/reset.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Cable from '../vue/cable.vue'
import CableHome from '../components/cablehome.vue'
import CableItem from '../components/cableitem.vue'

Vue.use(VueRouter);
Vue.use(ElementUI)

const routes = [ 
	{
		path:"/",
		component:CableHome
	},
	{
		path:"/item",
		component:CableItem
	}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
	el:"#cable",
	router,
    render: h => h(Cable)
})