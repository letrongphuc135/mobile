<template>


    <!-- Header End -->

    <div>
        <div class="header--sidebar"></div>
        <header class="header">
            <div class="header__top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                            <p><i class="fas fa-mobile"></i> 460 West 34th Street, 15th floor, New
                                York - Hotline: 804-377-3580 - 804-399-3580</p>
                        </div>
                        <div class="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
                            <div class="header__actions">
                                <div class="login" v-if="this.$store.state.auth != null" >
                                    <router-link :to="{name: 'order-customer'}">{{this.$store.state.auth.name}}</router-link>
                                    <a href="#" @click="logout">logout</a>
                                </div>
                                <div class="login" v-else >
                                    <router-link :to="{name : 'login'}">login & resgister</router-link>
                                </div>

                                <div class="btn-group ps-dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{$t('language[0].name')}}<i class="fa fa-angle-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li ><a href="#" v-for="lang in $t('language')" v-bind:key="lang.value"
                                                @click.prevent="callSetLangActions(lang)" :title="lang.name">{{lang.name }}</a></li>
                                        <!--<li><a href="#">Japanese</a></li>-->
                                        <!--<li><a href="#">Chinese</a></li>-->
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--<nav class="navigation">-->
                <!--<div class="container-fluid">-->
                    <!--<div class="navigation__column left">-->
                        <!--<div class="header__logo"><a class="ps-logo" href="index.html"><img-->
                            <!--src="images/logo.png" alt=""></a></div>-->
                    <!--</div>-->
                    <!--<div class="navigation__column center">-->
                        <!--<ul class="main-menu menu">-->
                            <!--&lt;!&ndash; <li class="menu-item menu-item-has-children dropdown" v-for="(category, index) in categories" :key="index"><a href="index.html">{{category.name}}</a>-->
                               <!--<ul class="sub-menu" >-->
                                   <!--<li class="menu-item" v-for="(productType, indexPro) in category.product_type" :key="indexPro"><a href="">{{productType.name}}</a></li>-->

                               <!--</ul>ss-->
                           <!--</li> &ndash;&gt;-->
                            <!--<li class="menu-item menu-item-has-children has-mega-menu"-->
                                <!--v-for="(category, index) in categories" :key="index">><router-link :to="{name:'product-category', params:{slugCategory: category.slug}}">{{category.name}}</router-link>-->
                                <!--<div class="mega-menu" v-if="category.product_type.length > 0">-->
                                    <!--<div class="mega-wrap">-->
                                        <!--<div class="mega-column">-->
                                            <!--&lt;!&ndash;v-for="(productType, indexPro) in category.product_type" :key="indexPro"&ndash;&gt;-->
                                            <!--<ul class="mega-item" v-for="(productType, indexPro) in category.product_type"-->
                                                <!--:key="indexPro" v-if="indexPro % 2 == 0">-->
                                                <!--<li><router-link :to="{name:'product-productType', params:{slugCategory: category.slug, slugProductType : productType.slug}}">{{productType.name}}</router-link></li>-->
                                            <!--</ul>-->
                                        <!--</div>-->
                                        <!--<div class="mega-column">-->
                                            <!--&lt;!&ndash;v-for="(productType, indexPro) in category.product_type" :key="indexPro"&ndash;&gt;-->
                                            <!--<ul class="mega-item" v-for="(productType, indexPro) in category.product_type"-->
                                                <!--:key="indexPro" v-if="indexPro % 2 !=0">-->
                                                <!--<li><router-link :to="{name:'product-productType', params:{slugCategory: category.slug, slugProductType : productType.slug}}" >{{productType.name}}</router-link></li>-->
                                            <!--</ul>-->
                                        <!--</div>-->
                                    <!--</div>-->

                                <!--</div>-->

                            <!--</li>-->

                        <!--</ul>-->
                    <!--</div>-->
                    <!--<div class="navigation__column right">-->
                        <!--<form class="ps-search&#45;&#45;header" action="do_action" method="post">-->
                            <!--<input class="form-control" type="text" placeholder="Search Product…">-->
                            <!--<button><i class="ps-icon-search"></i></button>-->
                        <!--</form>-->

                        <!--&lt;!&ndash;&lt;!&ndash;Cart order &ndash;&gt;&ndash;&gt;-->
                        <!--<div class="ps-cart" v-if="this.$store.state.auth"><a class="ps-cart__toggle"-->
                                                <!--href="#"><span><i>{{this.$store.state.cart.length}}</i></span><i-->
                            <!--class="ps-icon-shopping-cart"></i></a>-->
                            <!--<div class="ps-cart__listing">-->
                                <!--<div class="ps-cart__content">-->
                                    <!--<div class="ps-cart-item" v-for="(item, index) in this.$store.state.cart" :key="index">-->
                                        <!--<a class="ps-cart-item__close" @click="removeItem(item)"></a>-->
                                        <!--<div class="ps-cart-item__thumbnail"><a-->
                                            <!--href="product-detail.html"></a><img-->
                                            <!--:src="item.product.product_img[0].url" alt=""></div>-->
                                        <!--<div class="ps-cart-item__content"><a-->
                                            <!--class="ps-cart-item__title" href="product-detail.html">{{item.product.name}}</a>-->
                                            <!--<p>-->
                                                <!--<span>Quantity:<i>{{item.quantity}}</i></span><span>Total:<i>{{formatTotalPrice(item.product.price, item.quantity)}}</i></span>-->
                                            <!--</p>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                                <!--<div class="ps-cart__total">-->
                                    <!--<p v-if="this.$store.state.cart.length > 0">Item Total:<span>{{formatSubTotalPrice()}}</span></p>-->
                                    <!--<p v-else><span>Chưa có sản phẩm trong giỏ hàng</span></p>-->
                                <!--</div>-->
                                <!--<div v-if="this.$store.state.cart.length > 0" class="ps-cart__footer" ><router-link class="ps-btn" style="background-color: #e7ab3c" :to="{name : 'cart'}">{{$t('viewcart')}}<i class="ps-icon-arrow-left"></i></router-link></div>-->
                                <!--<div v-if="this.$store.state.cart.length > 0"class="ps-cart__footer"><router-link class="ps-btn" :to="{name : 'checkout'}">{{$t('checkout')}}<i class="ps-icon-arrow-left"></i></router-link></div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="menu-toggle"><span></span></div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</nav>-->
        </header>
        <header class="header-section">

            <div class="container">
                <div class="inner-header">
                    <div class="row">
                        <div class="col-lg-2 col-md-2">
                            <div class="logo">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7">
                            <div class="advanced-search">
                                <div  class="input-group" style="max-width: 100%">
                                    <input v-model="textSearch" @keyup.enter="search" type="text" placeholder="What do you need?" style="color: black">
                                    <button type="button"><i class="ti-search" @click="search"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 text-right col-md-3" >
                            <ul class="nav-right" v-if="this.$store.state.auth">
                                <li class="cart-icon"><a href="#">
                                    <i class="icon_bag_alt"></i>
                                    <span>{{this.$store.state.cart.length}}</span>
                                </a>
                                    <div class="cart-hover">
                                        <div class="select-items">
                                            <table>
                                                <tbody>
                                                <tr v-for="(item, index) in this.$store.state.cart" :key="index">
                                                    <td class="si-pic"><img style="width: 70px; height: 70px"
                                                        :src="item.product.product_img[0].url" alt=""></td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>{{formatPrice(item.product.price)}} x {{item.quantity}}</p>
                                                            <h6>{{item.product.name}}</h6>
                                                        </div>
                                                    </td>
                                                    <td class="si-close">
                                                        <i class="ti-close" @click="removeItem(item)"></i>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="select-total" v-if="this.$store.state.cart.length > 0">
                                            <span>total:</span>
                                            <h5>{{formatSubTotalPrice()}}</h5>
                                        </div>
                                        <div class="select-total" v-else>
                                            <h5>Chưa có sản phẩm trong giỏ hàng</h5>
                                        </div>
                                        <div class="select-button" v-if="this.$store.state.cart.length > 0">
                                            <router-link class="primary-btn view-card" :to="{name : 'cart'}" >{{$t('viewcart')}}</router-link>
                                            <router-link class="primary-btn checkout-btn" :to="{name : 'checkout'}">{{$t('checkout')}}</router-link>
                                        </div>
                                    </div>
                                </li>
                                <li class="cart-price">{{formatSubTotalPrice()}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-item">
                <div class="container">
                    <nav class="nav-menu mobile-menu d-flex justify-content-center">
                        <ul>
                            <li><router-link to="/home">Home</router-link></li>
                            <li v-for="(category, index) in categories" :key="index"><router-link :to="{name:'product-category', params:{slugCategory: category.slug}}">{{category.name}}</router-link>
                                <ul class="dropdown">
                                    <li v-for="(productType, indexPro) in category.product_type"
                                        :key="indexPro"><router-link :to="{name:'product-productType', params:{slugCategory: category.slug, slugProductType : productType.slug}}" >{{productType.name}}</router-link></li>
                                    <!--<li><a href="#">Women's</a></li>-->
                                    <!--<li><a href="#">Kid's</a></li>-->
                                </ul>
                            </li>
                            <li><a href="/list-blog">Blog</a></li>
                            <li><a href="./contact.html">Contact</a></li>

                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    import StringUtil from "../../utils/StringUtils"
    const stringUtil = new StringUtil();
    export default {
        name: "Header",
        data() {
            return {
                categories: [],
                auth:'',
                textSearch: ''
            }
        },
        methods: {
            getAllCategory() {
                axios.get('/api/getAllCategory')
                .then(response => {
                    console.log(response.data);
                    this.categories = response.data.category;
                })
            },
            callSetLangActions(lang) {
                i18n.locale = lang.value;
                i18n.fallbackLocale = lang.value;
            },
             User() {
                axios.get('/api/checklogin')
                .then(response => {
                    console.log(response.data.data);
                    this.auth = response.data.data;
                })
            },
            logout(){
                this.$store.commit('logout');
                this.$router.push({name: 'home'});

            },
            removeItem(item){
                this.$store.commit('removeFromCart',item);
                // axios.post('/api/removeItem/'+item.product.id  +'/' + item.quantity)
                // .then(response => {
                //     console.log(response.data);
                //     Fire.$emit('productDetail');
                // })

            },
            formatPrice(price) {
                let formatedNumber = price || 0;
                return stringUtil.formatNumber(formatedNumber);
            },
            formatTotalPrice(price, quantity) {
                let formatedNumber = price || 0;
                formatedNumber *= quantity;
                return stringUtil.formatNumber(formatedNumber);
            },
            formatSubTotalPrice() {
                // let formatedNumber = price || 0;
                // formatedNumber *= quantity;
                var total = 0;
                for(var i = 0; i < this.$store.state.cart.length; i++ ){
                    var item = this.$store.state.cart[i];
                    total += item.product.price * item.quantity;
                }
                return stringUtil.formatNumber(total);
            },
            search(){
                this.$router.push({name: 'search', params: {key: this.textSearch}});
            }
        },

        created() {
            this.User();
            this.getAllCategory();
        },


    }
</script>

<style scoped>

</style>
