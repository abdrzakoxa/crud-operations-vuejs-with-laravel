import VueRoute from 'vue-router'
import Vue from 'vue'
// components
import create from './components/post/create'
import index from './components/post/index'
import edit from './components/post/edit'

const routes = [
    { path: '/post/create', component: create},
    { path: '/', component: index},
    { path: '/post/edit/:id', component: edit},
]

Vue.use(VueRoute);

const router = new VueRoute({
    routes,
    mode: 'history'
});

export default router
