import '../other/reset.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Home from '../vue/home.vue'

Vue.use(ElementUI)

const app = new Vue({
	el:"#homepage",
    render: h => h(Home)
})