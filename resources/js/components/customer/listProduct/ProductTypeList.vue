<template>
    <div>
        <!-- Breadcrumb Section Begin -->
        <Section :path="path"></Section>
        <!-- Breadcrumb Section Begin -->

        <!-- Product Shop Section Begin -->
        <section class="product-shop spad">
            <div class="container">
                <div class="row">
                    <!--<div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">-->
                        <!--<div class="filter-widget">-->
                            <!--<h4 class="fw-title">Categories</h4>-->
                            <!--<ul class="filter-catagories">-->
                                <!--<li><a href="#">Men</a></li>-->
                                <!--<li><a href="#">Women</a></li>-->
                                <!--<li><a href="#">Kids</a></li>-->
                            <!--</ul>-->
                        <!--</div>-->
                        <!--<div class="filter-widget">-->
                            <!--<h4 class="fw-title">Brand</h4>-->
                            <!--<div class="fw-brand-check">-->
                                <!--<div class="bc-item">-->
                                    <!--<label for="bc-calvin">-->
                                        <!--Calvin Klein-->
                                        <!--<input type="checkbox" id="bc-calvin">-->
                                        <!--<span class="checkmark"></span>-->
                                    <!--</label>-->
                                <!--</div>-->
                                <!--<div class="bc-item">-->
                                    <!--<label for="bc-diesel">-->
                                        <!--Diesel-->
                                        <!--<input type="checkbox" id="bc-diesel">-->
                                        <!--<span class="checkmark"></span>-->
                                    <!--</label>-->
                                <!--</div>-->
                                <!--<div class="bc-item">-->
                                    <!--<label for="bc-polo">-->
                                        <!--Polo-->
                                        <!--<input type="checkbox" id="bc-polo">-->
                                        <!--<span class="checkmark"></span>-->
                                    <!--</label>-->
                                <!--</div>-->
                                <!--<div class="bc-item">-->
                                    <!--<label for="bc-tommy">-->
                                        <!--Tommy Hilfiger-->
                                        <!--<input type="checkbox" id="bc-tommy">-->
                                        <!--<span class="checkmark"></span>-->
                                    <!--</label>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="filter-widget">-->
                            <!--<h4 class="fw-title">Price</h4>-->
                            <!--<div class="filter-range-wrap">-->
                                <!--<div class="range-slider">-->
                                    <!--<div class="price-input">-->
                                        <!--<input type="text" id="minamount">-->
                                        <!--<input type="text" id="maxamount">-->
                                    <!--</div>-->
                                <!--</div>-->
                                <!--<div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"-->
                                     <!--data-min="33" data-max="98">-->
                                    <!--<div class="ui-slider-range ui-corner-all ui-widget-header"></div>-->
                                    <!--<span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>-->
                                    <!--<span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<a href="#" class="filter-btn">Filter</a>-->
                        <!--</div>-->
                        <!--<div class="filter-widget">-->
                            <!--<h4 class="fw-title">Color</h4>-->
                            <!--<div class="fw-color-choose">-->
                                <!--<div class="cs-item">-->
                                    <!--<input type="radio" id="cs-black">-->
                                    <!--<label class="cs-black" for="cs-black">Black</label>-->
                                <!--</div>-->
                                <!--<div class="cs-item">-->
                                    <!--<input type="radio" id="cs-violet">-->
                                    <!--<label class="cs-violet" for="cs-violet">Violet</label>-->
                                <!--</div>-->
                                <!--<div class="cs-item">-->
                                    <!--<input type="radio" id="cs-blue">-->
                                    <!--<label class="cs-blue" for="cs-blue">Blue</label>-->
                                <!--</div>-->
                                <!--<div class="cs-item">-->
                                    <!--<input type="radio" id="cs-yellow">-->
                                    <!--<label class="cs-yellow" for="cs-yellow">Yellow</label>-->
                                <!--</div>-->
                                <!--<div class="cs-item">-->
                                    <!--<input type="radio" id="cs-red">-->
                                    <!--<label class="cs-red" for="cs-red">Red</label>-->
                                <!--</div>-->
                                <!--<div class="cs-item">-->
                                    <!--<input type="radio" id="cs-green">-->
                                    <!--<label class="cs-green" for="cs-green">Green</label>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="filter-widget">-->
                            <!--<h4 class="fw-title">Size</h4>-->
                            <!--<div class="fw-size-choose">-->
                                <!--<div class="sc-item">-->
                                    <!--<input type="radio" id="s-size">-->
                                    <!--<label for="s-size">s</label>-->
                                <!--</div>-->
                                <!--<div class="sc-item">-->
                                    <!--<input type="radio" id="m-size">-->
                                    <!--<label for="m-size">m</label>-->
                                <!--</div>-->
                                <!--<div class="sc-item">-->
                                    <!--<input type="radio" id="l-size">-->
                                    <!--<label for="l-size">l</label>-->
                                <!--</div>-->
                                <!--<div class="sc-item">-->
                                    <!--<input type="radio" id="xs-size">-->
                                    <!--<label for="xs-size">xs</label>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="filter-widget">-->
                            <!--<h4 class="fw-title">Tags</h4>-->
                            <!--<div class="fw-tags">-->
                                <!--<a href="#">Towel</a>-->
                                <!--<a href="#">Shoes</a>-->
                                <!--<a href="#">Coat</a>-->
                                <!--<a href="#">Dresses</a>-->
                                <!--<a href="#">Trousers</a>-->
                                <!--<a href="#">Men's hats</a>-->
                                <!--<a href="#">Backpack</a>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <div class="col-lg-12 order-1 order-lg-2">
                        <div class="product-show-option">
                            <div class="row">
                                <div class="col-lg-7 col-md-7">
                                    <div class="select-option">
                                        <select class="sorting" v-model="sort">
                                            <option value="">Default Sorting</option>
                                            <option value="asc">Giá từ thấp đến cao</option>
                                            <option value="desc">Giá từ cao đến thấp</option>
                                        </select>
                                        <select class="p-show">
                                            <option value="">Show:</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-5 text-right">
                                    <p>Show 01- 09 Of 36 Product</p>
                                </div>
                            </div>
                        </div>
                        <div class="product-list">
                            <div class="row">
                                <div class="col-lg-3 col-sm-6" v-for="(product, index) in products" :key="index">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img :src="product.product_img[0].url" alt="">
                                            <div class="sale pp-sale">Sale</div>
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view">
                                                    <router-link
                                                        :to="{ name: 'product-detail', params: {slugCategory: product.category.slug, slugProductType: product.product_type.slug, slug: product.slug} }">
                                                        + Quick View
                                                    </router-link>
                                                </li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>{{product.name}}</h5>
                                            </a>
                                            <div class="product-price">
                                                {{formatPrice(product.price)}}
                                                <span>{{formatPrice(product.price)}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="https://cdn.tgdd.vn/Products/Images/42/219913/vivo-y50-tim-400x460-3-400x460.png" alt="">
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <a href="#">
                                                <h5>Guangzhou sweater</h5>
                                            </a>
                                            <div class="product-price">
                                                $13.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="../../../../../public/assets/customer/fashi/img/products/product-3.jpg" alt="">
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Guangzhou sweater</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="../../../../../public/assets/customer/fashi/img/products/product-3.jpg" alt="">
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Guangzhou sweater</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="../../../../../public/assets/customer/fashi/img/products/product-4.jpg" alt="">
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <a href="#">
                                                <h5>Microfiber Wool Scarf</h5>
                                            </a>
                                            <div class="product-price">
                                                $64.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="../../../../../public/assets/customer/fashi/img/products/product-5.jpg" alt="">
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Men's Painted Hat</h5>
                                            </a>
                                            <div class="product-price">
                                                $44.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="../../../../../public/assets/customer/fashi/img/products/product-6.jpg" alt="">
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Converse Shoes</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="../../../../../public/assets/customer/fashi/img/products/product-7.jpg" alt="">
                                            <div class="sale pp-sale">Sale</div>
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $64.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="../../../../../public/assets/customer/fashi/img/products/product-8.jpg" alt="">
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <a href="#">
                                                <h5>2 Layer Windbreaker</h5>
                                            </a>
                                            <div class="product-price">
                                                $44.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="../../../../../public/assets/customer/fashi/img/products/product-9.jpg" alt="">
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Converse Shoes</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="../../../../../public/assets/customer/fashi/img/products/product-9.jpg" alt="">
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Converse Shoes</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="../../../../../public/assets/customer/fashi/img/products/product-9.jpg" alt="">
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Converse Shoes</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="loading-more">
                            <i class="icon_loading"></i>
                            <a href="#">
                                Loading More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Shop Section End -->

        <!-- Partner Logo Section Begin -->
        <div class="partner-logo">
            <div class="container">
                <div class="logo-carousel owl-carousel">
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="../../../../../public/assets/customer/fashi/img/logo-carousel/logo-1.png" alt="">
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="../../../../../public/assets/customer/fashi/img/logo-carousel/logo-2.png" alt="">
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="../../../../../public/assets/customer/fashi/img/logo-carousel/logo-3.png" alt="">
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="../../../../../public/assets/customer/fashi/img/logo-carousel/logo-4.png" alt="">
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="../../../../../public/assets/customer/fashi/img/logo-carousel/logo-5.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Partner Logo Section End -->
        <LoadingAnition :isLoading="isLoading"></LoadingAnition>
    </div>
</template>

<script>
    import StringUtil from  "../../../utils/StringUtils"
    import Section from "../Section";
    const stringUtil = new StringUtil();
    import LoadingAnition from "../../customer/LoadingAnimation";
    export default {
        name: "ProductTypeList",
        components: {Section, LoadingAnition},
        data(){
            return{
                products: [],
                path:{
                    category: null,
                    productType: null
                },
                slugProductType: this.$route.params.slugProductType,
                itemPerPage: 2,
                numPerPageList: [
                    2,
                    3,
                    10
                ],
                test: [],
                nextPage: 0,
                isLoading: true,
                moreExists : false,
                sort: 0
            }
        },
        methods:{
            getSlug(){
                this.path.productType = null;
                this.path.category = null;
                var slugCategory = this.$route.params.slugCategory;
                this.slugProductType = this.$route.params.slugProductType;
                console.log("cate " + slugCategory);
                console.log("productType" + this.slugProductType);
                this.getCatgeoryBySlug(slugCategory);
                this.getProductTypeBySlug(this.slugProductType);
            },
            getProductTypeBySlug(slugProductType) {
                axios.get('/api/getProductTypeBySlug/'+slugProductType)
                .then(response => {
                    console.log(response.data);
                    this.path.productType = response.data[0];
                    this.isLoading = false;
                    this.getAllProductByProductTypeId(response.data[0].id);
                })
                .catch(function (error) {
                    console.log(error);
                })
            },
            getCatgeoryBySlug(slugCategory) {
                axios.get('/api/getCategoryBySlug/'+ slugCategory)
                .then(response => {
                    console.log(response.data);
                    this.path.category = response.data[0];
                });
            },
            getAllProductByProductTypeId(id) {
                this.isLoading = true;
                // this.form.idProductType = -1;
                axios.get('/api/getProductByProductTypeId/'+ id+'/'+this.itemPerPage)
                .then(response => {
                    console.log(response.data.product.data);
                    this.products = response.data.product.data;
                    this.isLoading = false;
                    if (response.data.product.current_page < response.data.product.last_page) {
                        this.moreExists = true;
                        this.nextPage = response.data.product.current_page + 1;
                    }else{
                        this.moreExists = false;
                    }
                    Fire.$emit('offLoading');
                })
                .catch(function (error) {
                    console.log(error);
                })
            },

            formatPrice(price) {
                let formatedNumber = price || 0;
                return stringUtil.formatNumber(formatedNumber);
            }
        },

        loadMore : async function(){
            console.log("loadmore");
            console.log("nextpage", this.nextPage);
            var id = this.path.category.id;

            axios.get('/api/getProductByProductTypeId/'+ id+'/'+this.itemPerPage + '?page=' + this.nextPage)
            .then(response => {
                console.log(response.data.product);
                this.isLoading = false;
                if (response.data.product.current_page < response.data.product.last_page) {
                    this.moreExists = true;
                    this.nextPage = response.data.product.current_page + 1;
                }else{
                    this.moreExists = false;
                }
                var current = this;

                response.data.product.data.forEach(data => {
                    console.log(data);
                    current.products.push(data);
                    current.test.push(data);
                });
            })
            .catch(function (error) {
                console.log(error);
            })
        },

        beforeRouteUpdate ( to, from , next ) {
            // console.log('Reusing this component.')
            // this.user = this.getUser(to.params.slugCategory);
            console.log('Entering User' +to.params.slugProductType);
            this.slugProductType = to.params.slugProductType;
            this.getProductTypeBySlug(this.slugProductType);
            next()
        },

        created() {
           this.getSlug();
           //this.getAllProductByProductTypeId();
        },
    }
</script>

<style scoped>

</style>
