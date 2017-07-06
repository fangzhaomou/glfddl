import '../other/reset.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Projects from '../vue/projects.vue';
import ProjectsHome from '../components/projectshome.vue';
import ProjectsItem from '../components/projectsitem.vue';

Vue.use(VueRouter);
Vue.use(ElementUI)

const routes = [ 
	{
		path:"/",
		component:ProjectsHome
	}
	,
	{
		path:"/item",
		component:ProjectsItem
	}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
	el:"#projects",
	router,
    render: h => h(Projects)
})

