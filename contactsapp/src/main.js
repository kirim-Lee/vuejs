// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios';
import store from './store';
import App from './App'
import VueRouter from 'vue-router';
//require('es6-promise').polyfill();

import Home from './components/Home';
import About from './components/About';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import UpdatePhoto from './components/UpdatePhoto';

Vue.use(VueRouter);

Vue.prototype.$axios=axios;
Vue.config.productionTip = false

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',name:'home',component:Home},
        {path:'/about',name:'about',component:About},
        {
            path:'/contacts',name:'contacts',component:ContactList,
            children:[
				{path:'add',name:'addcontact',component:ContactForm,props:true},
				{path:'update/:no',name:'updatecontact',component:ContactForm,props:true},
				{path:'photo/:no',name:'updatephoto',component:UpdatePhoto,props:true},
            ]
        }
    ]
})

/* eslint-disable no-new */
new Vue({
    store,
    router,
    el: '#app',
    components: { App },
    template: '<App/>'
})
