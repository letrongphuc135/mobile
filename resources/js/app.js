require('./bootstrap');

window.Vue = require('vue');

import {Form, HasError, AlertError} from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router';
import moment from 'moment';
import Swal from 'sweetalert2'
import CKEditor from 'ckeditor4-vue';

window.Swal = Swal;

window.Fire = new Vue();
Vue.use(CKEditor);
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

Vue.component('admin', require('./components/Test').default);
// Vue.component('example', require('./components/ExampleComponent').default );
// // Vue.component('mobile', require('./components/views/MobileHome').default );
// Vue.component('productDetail', require('./components/ExampleComponent').default );
// // Vue.component('productDetail', require('./components/customer/productDetail/ProductDetail').default );
Vue.component('product',
    require('./components/views/ProductDetailView').default);
let routes = [

    {
        path: "/admin/category",
        name: "category",
        component: () => import("./components/admin/Category"),
    },
    {
        path: '/admin/develop',
        component: require('./components/admin/Develop').default
    },
    {
        path: '/admin/producttype',
        component: require('./components/admin/ProductType').default
    },
    {
        path: '/admin/product',
        component: require('./components/admin/Product').default
    },
    {
        path: '/admin/add-product',
        component: require('./components/admin/AddProduct').default
    },
    {
        path: '/admin/edit-product/:product_id',
        name: "edit-product",
        component: require('./components/admin/EditProduct').default
    },

    // { path: '/admin/dashboard', component: require('./components/admin/AdminHome').default },
    // { path: '/admin/category', component: require('./components/admin/Category').default },

    {
        path: '/',
        component: require('./components/views/MobileHome').default,
        redirect: {path: "/home"},
        children: [
            {
                path: "/home",
                name: "home",
                component: require('./components/customer/home/Home').default
            },
            {
                path: "/product-detail/:name",
                name: "product-detail",
                component: require(
                    './components/customer/productDetail/ProductDetail').default
            },
            {
                path: "/product-detail",
                name: "abc",
                component: require(
                    './components/customer/productDetail/ProductDetail').default
            },
            // { path: 'product-detail', component: require('./components/customer/productDetail/ProductDetail').default },
        ]
    },

];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    },
    routes // short for `routes: routes`
});

Vue.filter('myDate', function (created) {
    moment.locale();
    return moment(created).format('L');
});

const app = new Vue({
    el: '#app',
    router
});
