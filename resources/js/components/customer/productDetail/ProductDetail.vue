<template>
    <div>
        <!--&lt;!&ndash; Page Preloder &ndash;&gt;-->
        <!--<div id="preloder">-->
        <!--<div class="loader"></div>-->
        <!--</div>-->
        <main class="ps-main">
            <!-- Breadcrumb Section Begin -->
            <div class="breacrumb-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-text product-more">
                                <router-link to="/home"><i class="fa fa-home"></i> Home
                                </router-link>
                                <a href="./shop.html">Shop</a>
                                <span>Detail</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Breadcrumb Section Begin -->

            <!-- Product Shop Section Begin -->
            <section class="product-shop spad page-details">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="product-pic-zoom">
                                        <!-- <img class="product-big-img" src="../../../../../public/assets/customer/fashi/img/product-single/product-1.jpg" alt=""> -->
                                        <img class="product-big-img" :src="productDetail.product_img[0].url"
                                             alt="">
                                        <div class="zoom-icon">
                                            <i class="fa fa-search-plus"></i>
                                        </div>
                                    </div>
                                    <div class="product-thumbs">
                                        <div class="product-thumbs-track ps-slider owl-carousel">
                                            <div class="pt active"
                                                 data-imgbigurl="img/product-single/product-1.jpg">
                                                <img
                                                    src="../../../../../public/assets/customer/fashi/img/product-single/product-1.jpg"
                                                    alt=""></div>
                                            <div class="pt"
                                                 data-imgbigurl="img/product-single/product-2.jpg">
                                                <img
                                                    src="../../../../../public/assets/customer/fashi/img/product-single/product-2.jpg"
                                                    alt=""></div>
                                            <div class="pt"
                                                 data-imgbigurl="img/product-single/product-3.jpg">
                                                <img
                                                    src="../../../../../public/assets/customer/fashi/img/product-single/product-3.jpg"
                                                    alt=""></div>
                                            <div class="pt"
                                                 data-imgbigurl="img/product-single/product-3.jpg">
                                                <img
                                                    src="../../../../../public/assets/customer/fashi/img/product-single/product-3.jpg"
                                                    alt=""></div>
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
                                               role="tab">DESCRIPTION</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#tab-2" role="tab">SPECIFICATIONS</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#tab-3" role="tab">Customer
                                                Reviews ({{allComment.length}})</a>
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
                                                                <td class="p-catagory">Customer
                                                                    Rating
                                                                </td>
                                                                <td>
                                                                    <div class="pd-rating">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star-o"></i>
                                                                        <span>(5)</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">Price</td>
                                                                <td>
                                                                    <div class="p-price">$495.00
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">Add To Cart
                                                                </td>
                                                                <td>
                                                                    <div class="cart-add">+ add to
                                                                        cart
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">
                                                                    Availability
                                                                </td>
                                                                <td>
                                                                    <div class="p-stock">22 in
                                                                        stock
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">Weight</td>
                                                                <td>
                                                                    <div class="p-weight">1,3kg
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">Size</td>
                                                                <td>
                                                                    <div class="p-size">Xxl</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">Color</td>
                                                                <td><span class="cs-color"></span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-catagory">Sku</td>
                                                                <td>
                                                                    <div class="p-code">00012</div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="tab-3" role="tabpanel">
                                            <div class="customer-review-option">
                                                <h4>{{allComment.length}} Comment</h4>
                                                <div class="comment-option" v-for="(comment, index) in allComment" :key="`${index}-${comment.id}`" >
                                                    <div class="co-item">
                                                        <div class="avatar-pic">
                                                            <img
                                                                src="../../../../../public/assets/customer/fashi/img/product-single/avatar-1.png"
                                                                alt="">
                                                        </div>
                                                        <div class="avatar-text">
                                                            <h5>{{comment.user.name}}
                                                                <span>{{comment.created_at}}</span></h5>
                                                            <div class="at-reply">{{comment.noidung}}</div>
                                                            <div class="co-item" style="margin-top:30px"  v-for="(commentadmin, index_admin) in comment.admincomment" :key="`${index_admin}-${commentadmin.id}`" >
                                                                <div class="avatar-pic">
                                                                    <img
                                                                        src="../../../../../public/assets/customer/fashi/img/product-single/avatar-1.png"
                                                                        alt="">
                                                                </div>
                                                                <div class="avatar-text">
                                                                    <h5>{{comment.user.name}}
                                                                        <span>{{commentadmin.created_at}}</span></h5>
                                                                    <div class="at-reply">{{commentadmin.content}}</div>
                                                                    
                                                                </div>
                                                            </div>
                                                                </div>
                                                            </div>
                                                </div>
                                                 <div class="personal-rating">
                                                    <!--<h6>Your Ratind</h6>
                                                    <div class="rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div> -->
                                                </div>
                                                <div class="leave-comment" v-if="this.$store.state.auth != null">
                                                    <h4>Leave A Comment</h4>
                                                    <form @submit.prevent="postCommment" class="comment-form">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <input type="text"
                                                                       placeholder="Name" v-bind:value="this.$store.state.auth.name" readonly> 
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <input type="text"
                                                                       placeholder="Email" v-bind:value="this.$store.state.auth.email" readonly> 
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <textarea
                                                                    placeholder="Messages" v-model="formMessage.noidung"></textarea>
                                                                <button type="submit"
                                                                        class="site-btn">Send
                                                                    message
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    
                                                </div>

                                                <div class="leave-comment" v-else>
                                                    <h4>Bạn cần đăng nhập để thực hiện chức năng này</h4>
                                                    <form @submit.prevent="login" class="comment-form">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <input type="email"
                                                                       placeholder="Email" v-model="form.email">
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <input type="password"
                                                                       placeholder="Password" v-model="form.password">
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <button type="submit"
                                                                        class="site-btn">login
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
    export default {
        name: "productDetail",
        data() {
            return {
                cartItem:{
                    productDetail: null,
                    quantity: 0,
                    productId: null,
                },
                productDetail: null,
                splitedStr: "",
                quantity: 1,
                form: new Form({
                    email:'',
                    password:'',
                }),
                auth:'',
                formMessage: new Form({
                    noidung:'',
                }),
                comment:null,
                allComment:[],
                productId: null
            }
        },
        methods: {
            getproductDetail() {
                var myCookie = document.cookie;
                console.log("myCookie" + myCookie);
                var param = this.$route.params.id + "";
                console.log(param);
                let id = stringUtil.splitString(param);
                // console.log("id " + id);
                axios.get('/api/getProductDetail/' + id)
                .then(response => {
                    console.log(response.data.product);
                    this.productDetail = response.data.product;
                    this.productDetail.quantity = 1;
                    console.log("idproduct " + response.data.product.id);
                    this.getComment( response.data.product.id);
                    this.productId = response.data.product.id;
                })
                
                
            },
            postCommment() {
                console.log("idComment " + this.productId);
                axios.post('/api/comment/' + this.productId, this.formMessage)
                .then(response => {
                    console.log(response.data.comment);
                    this.comment = response.data.comment;
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                     });
                     //current.$router.push({path: '/home'});
                    Fire.$emit('comment');
                })
                .catch(function (error) {
                    console.log(error);
                })
            },
             User() {
                axios.get('/api/checklogin')
                .then(response => {
                    console.log(response.data.data);
                    this.auth = response.data.data;
                })
            },
            getComment(id) {
                // var myCookie = document.cookie;
                // console.log("myCookie" + myCookie);
                // var param = this.$route.params.id + "";
                // console.log(param);
                // let id = stringUtil.splitString(param);
                console.log("idGetComment " + id);
                axios.get('/api/getAllCommentByIdProduct/'+id)
                .then(response => {
                    console.log(response.data.comment);
                    this.allComment = response.data.comment;
                })
            },
            login() {
                var current = this;
                 axios.post('/api/login', this.form)
                .then(response => {
                    console.log(response.data.data);
                    let auth = response.data.data;
                    this.$store.commit('login', auth);
                    if (!auth || auth.length === 0) {
                            Toast.fire({
                            icon: 'error',
                            title: response.data.message
                        });
                    }else{
                        Toast.fire({
                        icon: 'success',
                        title: response.data.message
                     });
                     //current.$router.push({path: '/home'});
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
            },
            formatPrice(price) {
                let formatedNumber = price || 0;
                return stringUtil.formatNumber(formatedNumber);
            },
            addToCart(item){
                this.$store.commit('addToCart', {product: this.productDetail, quantity: parseInt(this.quantity)});
            },


        },
        created() {
            this.getproductDetail();
            this. User();
            // this.getComment();
            Fire.$on('comment', ()=>{
               this.getComment(this.productId);
            });
        }
    }
</script>

<style scoped>

</style>