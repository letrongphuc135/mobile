
require('./bootstrap');

window.Vue = require('vue');

import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router';
import moment from 'moment';
import Swal from 'sweetalert2'
window.Swal = Swal;

window.Fire = new Vue();

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast;

Vue.use(VueRouter);
//passport
Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);


Vue.component('admin', require('./components/views/AdminMaster').default );
Vue.component('example', require('./components/ExampleComponent').default );
Vue.component('mobile', require('./components/views/MobileHome').default );

let routes = [
    { path: '/admin/dashboard', component: require('./components/admin/AdminHome').default },
    { path: '/admin/category', component: require('./components/admin/Category').default },
    { path: '/admin/develop', component: require('./components/admin/Develop').default },
    { path: '/admin/producttype', component: require('./components/admin/ProductType').default },
    { path: '/admin/product', component: require('./components/admin/Product').default },
    { path: '/', component: require('./components/customer/home/Home').default },
];

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});

Vue.filter('myDate', function(created){
    moment.locale();
    return moment(created).format('L');
});



const app = new Vue({
    el: '#app',
    router
});
