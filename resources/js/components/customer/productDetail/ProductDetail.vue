<template>
    <div>
        <!--&lt;!&ndash; Page Preloder &ndash;&gt;-->
        <!--<div id="preloder">-->
        <!--<div class="loader"></div>-->
        <!--</div>-->
        <main class="ps-main">
            <Section :path="path"></Section>
            <!-- Product Shop Section Begin -->
            <section class="product-shop spad page-details">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="product-pic-zoom">
                                        <!-- <img class="product-big-img" src="../../../../../public/assets/customer/fashi/img/product-single/product-1.jpg" alt=""> -->
                                        <img class="product-big-img" :src="mainImage"
                                             alt="">
                                        <div class="zoom-icon">
                                            <i class="fa fa-search-plus"></i>
                                        </div>
                                    </div>
                                    <div class="product-thumbs mt-3">
                                        <div  class="product-thumbs-track ps-slider">
                                            <div class="col-lg-3 slide-img" v-for="(img, index) in productDetail.product_img" :key="index">
                                                <img style="width: 150px"
                                                    :src="img.url"
                                                     @click.prevent="switchImage"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="product-details">
                                        <div class="pd-title">
                                            <span>oranges</span>
                                            <h1 class="font-weight-bold">{{productDetail.name}}</h1>
                                            <a href="#" class="heart-icon"><i
                                                class="icon_heart_alt"></i></a>
                                        </div>
                                        <div class="pd-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                            <span>(5)</span>
                                        </div>
                                        <div class="pd-desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur ing elit, sed
                                                do eiusmod tempor sum dolor
                                                sit amet, consectetur adipisicing elit, sed do mod
                                                tempor</p>
                                            <h1 class="price">{{formatPrice(productDetail.price)}}
                                                <span>{{formatPrice(productDetail.price)}}</span>
                                            </h1>
                                        </div>
                                        <div class="pd-color">
                                            <h6>Color</h6>
                                            <div class="pd-color-choose">
                                                <div class="cc-item">
                                                    <input type="radio" id="cc-black">
                                                    <label for="cc-black"></label>
                                                </div>
                                                <div class="cc-item">
                                                    <input type="radio" id="cc-yellow">
                                                    <label for="cc-yellow"
                                                           class="cc-yellow"></label>
                                                </div>
                                                <div class="cc-item">
                                                    <input type="radio" id="cc-violet">
                                                    <label for="cc-violet"
                                                           class="cc-violet"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pd-size-choose">
                                            <div class="sc-item">
                                                <input type="radio" id="sm-size">
                                                <label for="sm-size">s</label>
                                            </div>
                                            <div class="sc-item">
                                                <input type="radio" id="md-size">
                                                <label for="md-size">m</label>
                                            </div>
                                            <div class="sc-item">
                                                <input type="radio" id="lg-size">
                                                <label for="lg-size">l</label>
                                            </div>
                                            <div class="sc-item">
                                                <input type="radio" id="xl-size">
                                                <label for="xl-size">xs</label>
                                            </div>
                                        </div>
                                        <div class="quantity">
                                            <div class="pro-qty" >
                                                <input type="number" value=1 v-model="quantity">
                                            </div>
                                            <a class="primary-btn pd-cart" href="#" @click="addToCart(productDetail)">Add To Cart</a>

                                        </div>
                                        <ul class="pd-tags">
                                            <li><span>CATEGORIES</span>: More Accessories, Wallets &
                                                Cases
                                            </li>
                                            <li><span>TAGS</span>: Clothing, T-shirt, Woman</li>
                                        </ul>
                                        <div class="pd-share">
                                            <div class="p-code">Sku : 00012</div>
                                            <div class="pd-social">
                                                <a href="#"><i class="ti-facebook"></i></a>
                                                <a href="#"><i class="ti-twitter-alt"></i></a>
                                                <a href="#"><i class="ti-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-tab">
                                <div class="tab-item">
                                    <ul class="nav" role="tablist">
                                        <li>
                                            <a class="active" data-toggle="tab" href="#tab-1"
                                               role="tab">{{$t('product.description')}}</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#tab-2" role="tab">{{$t('product.specifications')}}</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#tab-3" role="tab">{{$t('product.customer_review')}}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-item-content">
                                    <div class="tab-content">
                                        <div class="tab-pane fade-in active" id="tab-1"
                                             role="tabpanel">
                                            <div class="product-content">
                                                <div class="row">
                                                    <div class="col-lg-9">
                                                        <h3>Introduction</h3>
                                                        <read-more style="font-size: 18px;" more-str="Đọc thêm" :text="productDetail.description" less-str="Thu gọn" :max-chars=500>
                                                            <div v-html="productDetail.description"></div>
                                                        </read-more>

                                                    </div>
                                                    <!--<div class="col-lg-5">-->
                                                    <!--<img src="../../../../../public/assets/customer/fashi/img/product-single/tab-desc.jpg" alt="">-->
                                                    <!--</div>-->
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="tab-2" role="tabpanel">
                                            <div class="specification-table">
                                                <div class="row">
                                                    <div class="col-lg-9">
                                                        <table>
                                                            <tr>
                                                                <td class="p-catagory">{{$t('product.screen')}}
                                                                </td>
                                                                <td>
                                                                    <div class="p-stock">{{productDetail.specification.screen}}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">{{$t('product.operating_system')}}</td>
                                                                <td>
                                                                    <div class="p-stock">{{productDetail.specification.operating_system}}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">{{$t('product.rear_camera')}}</td>
                                                                <td>
                                                                    <div class="p-stock">{{productDetail.specification.rear_camera}}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">{{$t('product.front_camera')}}</td>
                                                                <td>
                                                                    <div class="p-stock">{{productDetail.specification.front_camera}}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">cpu</td>
                                                                <td>
                                                                    <div class="p-stock">{{productDetail.specification.cpu}}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">ram</td>
                                                                <td>
                                                                    <div class="p-stock">{{productDetail.specification.ram}}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">{{$t('product.internal_memory')}}</td>
                                                                <td>
                                                                    <div class="p-stock">{{productDetail.specification.internal_memory}}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">sim</td>
                                                                <td>
                                                                    <div class="p-stock">{{productDetail.specification.sim}}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">{{$t('product.battery')}}</td>
                                                                <td>
                                                                    <div class="p-stock">{{productDetail.specification.battery}}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">{{$t('product.design')}}</td>
                                                                <td>
                                                                    <div class="p-stock">{{productDetail.specification.design}}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="tab-3" role="tabpanel">
                                            <div class="customer-review-option">
                                                <h4>2 Comments</h4>
                                                <div class="comment-option">
                                                    <div class="co-item">
                                                        <div class="avatar-pic">
                                                            <img
                                                                src="../../../../../public/assets/customer/fashi/img/product-single/avatar-1.png"
                                                                alt="">
                                                        </div>
                                                        <div class="avatar-text">
                                                            <div class="at-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-o"></i>
                                                            </div>
                                                            <h5>Brandon Kelley
                                                                <span>27 Aug 2019</span></h5>
                                                            <div class="at-reply">Nice !</div>
                                                        </div>
                                                    </div>
                                                    <div class="co-item">
                                                        <div class="avatar-pic">
                                                            <img
                                                                src="../../../../../public/assets/customer/fashi/img/product-single/avatar-2.png"
                                                                alt="">
                                                        </div>
                                                        <div class="avatar-text">
                                                            <div class="at-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-o"></i>
                                                            </div>
                                                            <h5>Roy Banks <span>27 Aug 2019</span>
                                                            </h5>
                                                            <div class="at-reply">Nice !</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="personal-rating">
                                                    <h6>Your Ratind</h6>
                                                    <div class="rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                                <div class="leave-comment">
                                                    <h4>Leave A Comment</h4>
                                                    <form action="#" class="comment-form">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <input type="text"
                                                                       placeholder="Name">
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <input type="text"
                                                                       placeholder="Email">
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <textarea
                                                                    placeholder="Messages"></textarea>
                                                                <button type="submit"
                                                                        class="site-btn">Send
                                                                    message
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Product Shop Section End -->

            <!-- Related Products Section End -->
            <div class="related-products spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Related Products</h2>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img
                                        src="../../../../../public/assets/customer/fashi/img/products/women-1.jpg"
                                        alt="">
                                    <div class="sale">Sale</div>
                                    <div class="icon">
                                        <i class="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li class="w-icon active"><a href="#"><i
                                            class="icon_bag_alt"></i></a></li>
                                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                                        <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Coat</div>
                                    <a href="#">
                                        <h5>Pure Pineapple</h5>
                                    </a>
                                    <div class="product-price">
                                        $14.00
                                        <span>$35.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img
                                        src="../../../../../public/assets/customer/fashi/img/products/women-2.jpg"
                                        alt="">
                                    <div class="icon">
                                        <i class="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li class="w-icon active"><a href="#"><i
                                            class="icon_bag_alt"></i></a></li>
                                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                                        <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Shoes</div>
                                    <a href="#">
                                        <h5>Guangzhou sweater</h5>
                                    </a>
                                    <div class="product-price">
                                        $13.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img
                                        src="../../../../../public/assets/customer/fashi/img/products/women-3.jpg"
                                        alt="">
                                    <div class="icon">
                                        <i class="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li class="w-icon active"><a href="#"><i
                                            class="icon_bag_alt"></i></a></li>
                                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                                        <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Towel</div>
                                    <a href="#">
                                        <h5>Pure Pineapple</h5>
                                    </a>
                                    <div class="product-price">
                                        $34.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img
                                        src="../../../../../public/assets/customer/fashi/img/products/women-4.jpg"
                                        alt="">
                                    <div class="icon">
                                        <i class="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li class="w-icon active"><a href="#"><i
                                            class="icon_bag_alt"></i></a></li>
                                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                                        <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Towel</div>
                                    <a href="#">
                                        <h5>Converse Shoes</h5>
                                    </a>
                                    <div class="product-price">
                                        $34.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Related Products Section End -->
        </main>
    </div>
</template>

<script>
    import StringUtil from "../../../utils/StringUtils"
    const stringUtil = new StringUtil();
    import Section from "../Section";
    export default {
        name: "productDetail",
        components: {Section},
        data() {
            return {
                cartItem:{
                    productDetail: null,
                    quantity: 0,
                    productId: null,
                },
                mainImage: null,
                productDetail: null,
                splitedStr: "",
                quantity: 1,
                path:{
                    category: null,
                    productType: null
                }

            }
        },
        methods: {
            getProductDetail() {
                var myCookie = document.cookie;
                console.log("myCookie" + myCookie);
                var param = this.$route.params.id + "";
                console.log(param);
                var param2 = this.$route.params.name + "";
                console.log("name  " + param2);
                let id = stringUtil.splitString(param);
                console.log("id " + id);
                axios.get('/api/getProductDetail/' + id)
                .then(response => {
                    console.log(response.data.product);
                    this.productDetail = response.data.product;
                    this.productDetail.quantity = 1;
                    this.mainImage = response.data.product.product_img[0].url;
                    this.path.category = response.data.product.category;
                    this.path.productType = response.data.product.product_type;

                    console.log("idProduct " + response.data.product.id);
                })
            },
            formatPrice(price) {
                let formatedNumber = price || 0;
                return stringUtil.formatNumber(formatedNumber);
            },
            addToCart(){
                // console.log("quantity" + this.quantity);
                // var current = this;
                // current.cartItem.quantity = parseInt(quantity);
                // current.cartItem.productDetail = current.productDetail;
                // current.cartItem.productId = current.productDetail.id;
                this.$store.commit('addToCart', {product: this.productDetail, quantity: parseInt(this.quantity)});
            },
            switchImage(event) {
                this.mainImage = event.target.src;
            }

        },
        created() {
            this.getProductDetail();
        }
    }
</script>

<style scoped>
.slide-img{
    padding: 5px;
    border: 3px solid rgb(199, 199, 199);
    margin-right: 30px;
}
</style>
