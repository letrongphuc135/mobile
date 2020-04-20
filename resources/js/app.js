require('./bootstrap');

window.Vue = require('vue');
import router from "./router";
import {Form, HasError, AlertError} from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import moment from 'moment';
import Swal from 'sweetalert2'
import CKEditor from 'ckeditor4-vue';
import store from "./store";
import i18n from "./lang/i18n";

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

import ReadMore from 'vue-read-more';

Vue.use(ReadMore);

Vue.component('admin', require('./components/Test').default);
Vue.component('product',
    require('./components/views/ProductDetailView').default);

Vue.filter('myDate', function (created) {
    moment.locale();
    return moment(created).format('L');
});


window.i18n = i18n;
const app = new Vue({
    el: '#app',
    router,
    i18n,
    store
});
