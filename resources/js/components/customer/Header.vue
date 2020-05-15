<template>
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
                                    <a href="#">{{this.$store.state.auth.name}}</a>
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
            <nav class="navigation">
                <div class="container-fluid">
                    <div class="navigation__column left">
                        <div class="header__logo"><a class="ps-logo" href="index.html"><img
                            src="images/logo.png" alt=""></a></div>
                    </div>
                    <div class="navigation__column center">
                        <ul class="main-menu menu">
                            <!-- <li class="menu-item menu-item-has-children dropdown" v-for="(category, index) in categories" :key="index"><a href="index.html">{{category.name}}</a>
                               <ul class="sub-menu" >
                                   <li class="menu-item" v-for="(productType, indexPro) in category.product_type" :key="indexPro"><a href="">{{productType.name}}</a></li>

                               </ul>ss
                           </li> -->
                            <li class="menu-item menu-item-has-children has-mega-menu"
                                v-for="(category, index) in categories" :key="index">><router-link :to="{name:'product-category', params:{slugCategory: category.slug}}">{{category.name}}</router-link>
                                <div class="mega-menu" v-if="category.product_type.length > 0">
                                    <div class="mega-wrap">
                                        <div class="mega-column">
                                            <!--v-for="(productType, indexPro) in category.product_type" :key="indexPro"-->
                                            <ul class="mega-item" v-for="(productType, indexPro) in category.product_type"
                                                :key="indexPro" v-if="indexPro % 2 == 0">
                                                <li><router-link :to="{name:'product-productType', params:{slugCategory: category.slug, slugProductType : productType.slug}}">{{productType.name}}</router-link></li>
                                            </ul>
                                        </div>
                                        <div class="mega-column">
                                            <!--v-for="(productType, indexPro) in category.product_type" :key="indexPro"-->
                                            <ul class="mega-item" v-for="(productType, indexPro) in category.product_type"
                                                :key="indexPro" v-if="indexPro % 2 !=0">
                                                <li><router-link :to="{name:'product-productType', params:{slugCategory: category.slug, slugProductType : productType.slug}}" >{{productType.name}}</router-link></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </li>

                        </ul>
                    </div>
                    <div class="navigation__column right">
                        <form class="ps-search--header" action="do_action" method="post">
                            <input class="form-control" type="text" placeholder="Search Product…">
                            <button><i class="ps-icon-search"></i></button>
                        </form>

                        <!--Cart order -->
                        <div class="ps-cart" v-if="this.$store.state.auth"><a class="ps-cart__toggle"
                                                href="#"><span><i>{{this.$store.state.cartCount}}</i></span><i
                            class="ps-icon-shopping-cart"></i></a>
                            <div class="ps-cart__listing">
                                <div class="ps-cart__content">
                                    <div class="ps-cart-item" v-for="(item, index) in this.$store.state.cart" :key="index">
                                        <a class="ps-cart-item__close" @click="$store.commit('removeFromCart',item)"></a>
                                        <div class="ps-cart-item__thumbnail"><a
                                            href="product-detail.html"></a><img
                                            :src="item.product.product_img[0].url" alt=""></div>
                                        <div class="ps-cart-item__content"><a
                                            class="ps-cart-item__title" href="product-detail.html">{{item.product.name}}</a>
                                            <p>
                                                <span>Quantity:<i>{{item.quantity}}</i></span><span>Total:<i>£176</i></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="ps-cart__total">
                                    <p>Number of items:<span>36</span></p>
                                    <p>Item Total:<span>£528.00</span></p>
                                </div>
                                <div class="ps-cart__footer" ><router-link class="ps-btn" style="background-color: #e7ab3c" :to="{name : 'cart'}">{{$t('viewcart')}}<i class="ps-icon-arrow-left"></i></router-link></div>
                                <div class="ps-cart__footer"><router-link class="ps-btn" :to="{name : 'checkout'}">{{$t('checkout')}}<i class="ps-icon-arrow-left"></i></router-link></div>
                            </div>
                        </div>
                        <div class="menu-toggle"><span></span></div>
                    </div>
                </div>
            </nav>
        </header>
        <div class="header-services">
            <div class="ps-services owl-slider" data-owl-auto="true" data-owl-loop="true"
                 data-owl-speed="7000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="false"
                 data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1"
                 data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">
                <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>:
                    Get free standard delivery on every order with Sky Store</p>
                <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>:
                    Get free standard delivery on every order with Sky Store</p>
                <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>:
                    Get free standard delivery on every order with Sky Store</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                categories: [],
                auth:'',
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
