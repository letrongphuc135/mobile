<template>
    <div>

        <div class="ps-section--features-product ps-section masonry-root pt-40 pb-80">
            <div class="ps-container">
                <div class="ps-section__header mb-50">
                    <h3 class="ps-section__title" data-mask="features">- New Product</h3>
                    <ul class="ps-masonry__filter">
                        <li class="current"><a style="cursor: pointer" data-filter="*">All
                            <sup>8</sup></a>
                        </li>
                        <li><a style="cursor: pointer" data-filter=".nike">Nike <sup>1</sup></a>
                        </li>
                        <li><a style="cursor: pointer" data-filter=".adidas">Adidas <sup>1</sup></a>
                        </li>
                        <li><a style="cursor: pointer" data-filter=".men">Men <sup>1</sup></a>
                        </li>
                        <li><a style="cursor: pointer" data-filter=".women">Women
                            <sup>1</sup></a></li>
                        <li><a style="cursor: pointer" data-filter=".kids">Kids <sup>4</sup></a>
                        </li>
                    </ul>
                </div>
                <div class="ps-section__content pb-50">
                    <!--<div class="masonry-wrapper" data-col-md="3" data-col-sm="2" data-col-xs="1"-->
                    <!--data-gap="30"-->
                    <!--data-radio="100%">-->
                    <!--<div class="ps-masonry">-->
                    <!--<div class="grid-sizer"></div>-->
                    <!--<div class="row">-->
                    <!--<div class="col-md-3" v-for="(product, index) in products"-->
                    <!--:key="`${index}-${product.id}`" :class="product.name">-->
                    <!--<div class="grid-item nike" style="width: 100%">-->
                    <!--<div class="grid-item__content-wrapper">-->
                    <!--<div class="ps-shoe mb-30">-->
                    <!--<div class="ps-shoe__thumbnail">-->
                    <!--<div class="ps-badge"><span>New</span></div>-->
                    <!--<div-->
                    <!--class="ps-badge ps-badge&#45;&#45;sale ps-badge&#45;&#45;2nd">-->
                    <!--<span>-35%</span></div>-->
                    <!--<a class="ps-shoe__favorite" href="#"><i-->
                    <!--class="ps-icon-heart"></i></a><img-->
                    <!--:src="product.product_img[0].url"-->
                    <!--alt=""><router-link-->
                    <!--class="ps-shoe__overlay"-->
                    <!--:to="{ name: 'product-detail', params: {name: product.name, id: product.id} }"></router-link>-->
                    <!--</div>-->
                    <!--<div class="ps-shoe__content">-->
                    <!--<div class="ps-shoe__variants">-->
                    <!--<div>-->
                    <!--mo ta ngan dsdsdsdsds dsdsds dsdsds-->
                    <!--dsdsdssdsds dsdsssdddddddd-->
                    <!--</div>-->
                    <!--&lt;!&ndash; <select class="ps-rating ps-shoe__rating">-->
                    <!--<option value="1">1</option>-->
                    <!--<option value="1">2</option>-->
                    <!--<option value="1">3</option>-->
                    <!--<option value="1">4</option>-->
                    <!--<option value="2">5</option>-->
                    <!--</select> &ndash;&gt;-->
                    <!--</div>-->
                    <!--<div class="ps-shoe__detail"><a-->
                    <!--class="ps-shoe__name" href="#">Air Jordan 7-->
                    <!--Retro</a>-->
                    <!--<p class="ps-shoe__categories"><a href="#">Men-->
                    <!--shoes</a>,<a href="#"> Nike</a>,<a-->
                    <!--href="#"> Jordan</a></p><span-->
                    <!--class="ps-shoe__price">-->
                    <!--<del>£220</del> £ 120</span>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <section class="product-shop spad">
                        <div class="container">
                            <div class="product-list">
                                <div class="row item-filter">
                                    <div class="col-lg-3 col-sm-6 isotop nike"
                                         v-for="(product, index) in products" :key="index">
                                        <div class="product-item">
                                            <div class="pi-pic">
                                                <img :src="product.product_img[0].url" alt="">
                                                <div class="sale pp-sale">Sale</div>
                                                <div class="icon">
                                                    <i class="icon_heart_alt"></i>
                                                </div>
                                                <ul>
                                                    <li class="w-icon active"><a href="#"><i
                                                        class="icon_bag_alt"></i></a></li>
                                                    <li class="quick-view">
                                                        <router-link
                                                            :to="{ name: 'product-detail', params: {name: product.name, id: product.id} }">
                                                            + Quick View
                                                        </router-link>
                                                    </li>
                                                    <li class="w-icon"><a href="#"><i
                                                        class="fa fa-random"></i></a></li>
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
                                    <div class="col-lg-3 col-sm-6 isotop adidas">
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
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import StringUtil from "../../../utils/StringUtils"

    const stringUtil = new StringUtil();
    export default {
        name: "ListProduct",
        data() {
            return {
                products: [],
            }
        },
        methods: {
            getAllProduct() {
                axios.get('/api/getAllProduct')
                .then(response => {
                    console.log(response.data.product);
                    this.products = response.data.product;
                })
            },
            formatPrice(price) {
                let formatedNumber = price || 0;
                return stringUtil.formatNumber(formatedNumber);
            }
        },
        created() {
            this.getAllProduct();
        },
        // watch: {
        //     products: function (value) {
        //         if (value) {
        //             jQuery(document).ready(function () {
        //                 $('ul li a').click(function(event) {
        //                     // var type = $(this).attr('data-type');
        //                     var type = $(this).data('filter');
        //                     console.log(type);
        //                     //var ten_loai = $(this).text();
        //                     // $('.title').text(ten_loai);
        //                     // type = '.'+type;
        //                     $('.item-filter').isotope({
        //                         itemSelector: '.isotop'
        //                     });
        //                     $('.item-filter').isotope({
        //                         filter:type
        //                     });
        //                 });
        //             });
        //         }
        //     }
        // }
    }
</script>

<style scoped>

</style>
