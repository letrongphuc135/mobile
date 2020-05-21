window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let routes = [
    {
        path: '/admin',
        component: require('./components/views/AdminMaster').default,
        redirect: {path: "/admin/category"},
        children: [
            {
                path: "/admin/category",
                name: "admin-category",
                component: () => import("./components/admin/Category"),
            },
            {
                path: '/admin/develop',
                component: require('./components/admin/Develop').default
            },
            {
                path: '/admin/producttype',
                name:"admin-producttype",
                component: require('./components/admin/ProductType').default
            },
            {
                path: '/admin/product',
                name: 'admin-product',
                component: require('./components/admin/Product').default
            },
            {
                path: '/admin/add-product',
                component: require('./components/admin/AddProduct').default
            },
            {
                path: '/admin/edit-product/:id',
                name: "edit-product",
                component: require('./components/admin/EditProduct').default
            },
            {
                path: '/admin/comment',
                name:"admin-comment",
                component: require('./components/admin/Comment').default
            },
            {
                path: '/admin/user',
                name:"admin-user",
                component: require('./components/admin/User').default
            },
            {
                path: '/admin/add-user',
                component: require('./components/admin/AddUser').default
            },
            {
                path: '/admin/role',
                name: 'admin-role',
                component: require('./components/admin/Role').default
            },
            {
                path: '/admin/blog',
                name: 'admin-blog',
                component: require('./components/admin/Blog').default
            },
            
        ]
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
                path: "/login-user",
                name: "login",
                component: require('./components/customer/auth/Login').default
            },
            {
                path: "/register-user",
                name: "register",
                component: require('./components/customer/auth/Register').default
            },
            // {
            //     path: "/product-detail",
            //     name: "product-detail",
            //     component: require(
            //         './components/customer/productDetail/ProductDetail').default
            // },
            {
                path: "/:slugCategory/:slugProductType/:slug",
                name: "product-detail",
                component: require(
                    './components/customer/productDetail/ProductDetail').default
            },
            {
                path: "/product-list",
                name: "product-list",
                component: require(
                    './components/customer/listProduct/ShopProdutcList').default
            },
            {
                path: "/cart",
                name: "cart",
                component: require('./components/customer/cart/Cart').default
            },
            {
                path: "/checkout",
                name: "checkout",
                component: require('./components/customer/cart/Checkout').default
            },
            {
                path: "/owl",
                name: "owl",
                component: require('./components/customer/home/Owl').default
            },
            {
                path: "/:slugCategory",
                name: "product-category",
                component: require(
                    './components/customer/listProduct/ShopProdutcList').default
            },
            {
                path: "/:slugCategory/:slugProductType",
                name: "product-productType",
                component: require(
                    './components/customer/listProduct/ProductTypeList').default
            },
            {
                path: "/email",
                name: "email",
                component: require('./components/customer/auth/Email').default
            },
            {
                path: "/password-reset",
                name: "password-reset",
                component: require('./components/customer/auth/ResetPassWord').default,
                props: true
            },
        ]
    },

];

export default new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    },
    routes // short for `routes: routes`
});
