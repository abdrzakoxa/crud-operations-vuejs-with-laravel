require('./bootstrap');

import Vue from 'vue'
import Main from './Main'
import router from './routes'

import { Form, HasError, AlertSuccess } from 'vform'

window.Form = Form;

Vue.component(HasError.name, HasError)
Vue.component(AlertSuccess.name, AlertSuccess)

const app = new Vue({
    el: '#app',
    router,
    render: h=> h(Main)
});

