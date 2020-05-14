<template>
    <div>
        <!--&lt;!&ndash; Page Preloder &ndash;&gt;-->
        <!-- Page Preloder -->

        <main class="ps-main">
            <Section :path="path"></Section>
            <!-- Product Shop Section Begin -->
            <section class="product-shop spad page-details">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-6">
                                    <!--<div class="product-pic-zoom">-->
                                        <!--<img class="product-big-img" :src="mainImage" style="min-width: 70%"-->
                                             <!--alt="">-->
                                        <!--<div class="zoom-icon">-->
                                            <!--<i class="fa fa-search-plus"></i>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                    <!--<div class="product-thumbs mt-3">-->
                                        <!--<div  class="product-thumbs-track ps-slider">-->
                                            <!--<div class="col-lg-3 slide-img" v-for="(img, index) in productDetail.product_img" :key="index">-->
                                                <!--<img style="width: 150px"-->
                                                    <!--:src="img.url"-->
                                                     <!--@click.prevent="switchImage"-->
                                                    <!--alt="">-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</div>-->

                                </div>
                                <div class="col-lg-6">
                                    <div class="product-details">
                                        <div class="pd-title">
                                            <!--<span>oranges</span>-->
                                            <h3 class="font-weight-bold">{{productDetail.name}}</h3>
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
                                            <!--<p>Lorem ipsum dolor sit amet, consectetur ing elit, sed-->
                                                <!--do eiusmod tempor sum dolor-->
                                                <!--sit amet, consectetur adipisicing elit, sed do mod-->
                                                <!--tempor</p>-->
                                            <h3 class="price">{{formatPrice(productDetail.price)}}
                                                <span>{{formatPrice(productDetail.price)}}</span>
                                            </h3>
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

                                        <div class="quantity">
                                            <div class="pro-qty" >
                                                <input type="number" value=1 v-model="quantity">
                                            </div>
                                            <button class="primary-btn pd-cart"  @click="addToCart(productDetail)">Add To Cart</button>

                                        </div>
                                        <!--<ul class="pd-tags">-->
                                            <!--<li><span>CATEGORIES</span>: More Accessories, Wallets &-->
                                                <!--Cases-->
                                            <!--</li>-->
                                            <!--<li><span>TAGS</span>: Clothing, T-shirt, Woman</li>-->
                                        <!--</ul>-->
                                        <!--<div class="pd-share">-->
                                            <!--<div class="p-code">Sku : 00012</div>-->
                                            <!--<div class="pd-social">-->
                                                <!--<a href="#"><i class="ti-facebook"></i></a>-->
                                                <!--<a href="#"><i class="ti-twitter-alt"></i></a>-->
                                                <!--<a href="#"><i class="ti-linkedin"></i></a>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                        <div style="border-radius: 20px; border: 1px solid black">
                                            <div style="padding: 5px; margin-left: 5px; font-size: 16px; color: black; font-weight: bold" >Khuyến mãi</div>
                                            <ul class="a">
                                                <li>Tặng: <span style="color: red">Cường lực - Ốp lưng - Tai nghe</span> khi mua BHV</li>
                                                <li>Giảm: 100K áp dụng HSSV mua BHV tại PN shop</li>
                                                <li>Mua: Dán cường lực 5D <span style="color: red">chỉ 99K</span></li>
                                                <li><span style="color: red">Giảm 100K</span> khi mua BHV và đặt hàng tại: Đây</li>
                                                <li>Cam kết bán<span style="color: red">iPhone</span> RẺ nhất VN</li>
                                            </ul>
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
                                            <a data-toggle="tab" href="#tab-3" role="tab">Customer
                                                Reviews ({{allComment.length}}) comment</a>
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
                                                        <read-more style="font-size: 14px;" more-str="Đọc thêm" :text="productDetail.description" less-str="Thu gọn" :max-chars=500>
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
                                                                <div class="comment-option" style="margin-top:10px" v-for="(commentAdmin, indexAdmin) in comment.admincomment" :key="`${indexAdmin}-${commentAdmin.id}`" >
                                                                <div class="co-item commentchiren" >
                                                                    <div class="avatar-pic">
                                                                        <img
                                                                            src="../../../../../public/assets/customer/fashi/img/product-single/avatar-1.png"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="avatar-text">
                                                                        <h5>{{commentAdmin.usercomment.name}}-Quản trị viên
                                                                            <span>{{commentAdmin.created_at}}</span></h5>
                                                                        <div class="at-reply" v-html="commentAdmin.content">{{commentAdmin.content}}</div>
                                                                    </div>
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
            <RelatedProduct></RelatedProduct>

        </main>
    </div>
</template>

<script>
    import StringUtil from "../../../utils/StringUtils"
    const stringUtil = new StringUtil();
    import LoadingAnition from "../../customer/LoadingAnimation";
    import Section from "../Section";
    import RelatedProduct from "./RelatedProduct";
    export default {
        name: "productDetail",
        components: {RelatedProduct, Section, LoadingAnition},
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
                },
                isLoading: true,

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
            getProductDetail() {
                Fire.$emit('onLoading');
                this.isLoading = true;
                // var myCookie = document.cookie;
                // console.log("myCookie" + myCookie);
                var slug = this.$route.params.slug;
                axios.get('/api/getProductDetail/' + slug)
                .then(response => {
                    console.log(response.data.product[0]);
                    this.productDetail = response.data.product[0];
                    this.productDetail.quantity = 1;
                    this.mainImage = response.data.product[0].product_img[0].url;
                    this.path.category = response.data.product[0].category;
                    this.path.productType = response.data.product[0].product_type;
                    //this.isLoading = false;
                    Fire.$emit('offLoading');
                    console.log("idproduct " + response.data.product[0].id);
                    this.getComment( response.data.product[0].id);
                    this.productId = response.data.product[0].id;
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
            addToCart(){
                var current = this;
                if (this.$store.state.auth == null){
                    current.$router.push({name: 'login'});
                } else {
                    this.$store.commit('addToCart', {product: this.productDetail, quantity: parseInt(this.quantity), total: this.productDetail.price * this.quantity});
                }

            },
            switchImage(event) {
                this.mainImage = event.target.src;
            }

        },
        created() {
            this.getProductDetail();
            this.User();
            //this.getComment();
            Fire.$on('comment', ()=>{
               this.getComment(this.productId);
            });
        }
    }
</script>

<style scoped>
.slide-img{
    padding: 5px;
    border: 3px solid rgb(199, 199, 199);
    margin-right: 30px;
}
ul.a {
    list-style-type: circle;
    margin-left: 30px;
}
#preloader {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999999;
    background: #000;
}

.loader2 {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -13px;
    margin-left: -13px;
    border-radius: 60px;
    animation: loader 0.8s linear infinite;
    -webkit-animation: loader 0.8s linear infinite;
}
@keyframes loader2 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        border: 4px solid #f44336;
        border-left-color: transparent;
    }
    50% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        border: 4px solid #673ab7;
        border-left-color: transparent;
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        border: 4px solid #f44336;
        border-left-color: transparent;
    }
}

@-webkit-keyframes loader2 {
    0% {
        -webkit-transform: rotate(0deg);
        border: 4px solid #f44336;
        border-left-color: transparent;
    }
    50% {
        -webkit-transform: rotate(180deg);
        border: 4px solid #673ab7;
        border-left-color: transparent;
    }
    100% {
        -webkit-transform: rotate(360deg);
        border: 4px solid #f44336;
        border-left-color: transparent;
    }
}

</style>
