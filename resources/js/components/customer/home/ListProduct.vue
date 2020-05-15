<template>
    <div>

        <div class="ps-section--features-product ps-section masonry-root pt-40 pb-80">
            <div class="ps-container">
                <div class="ps-section__header">
                    <h3 class="ps-section__title" data-mask="features">- New Product</h3>
                    <ul class="ps-masonry__filter">
                        <li v-for="(val, key) in option.getFilterData"
                            :class="[key===filterOption? 'current' : '']" @click="filter(key)"><a
                            style="cursor: pointer">{{key}} <sup>4</sup></a>
                        </li>
                    </ul>
                </div>
                <div class="ps-section__content">
                    <section class="product-shop spad">
                        <div class="container">
                            <div class="product-list">
                                <isotope ref="cpt" class="row" id="root_isotope1"
                                         :item-selector="'filter-item'" :list="products"
                                         :options='option' @filter="filterOption=arguments[0]">
                                    <div class="col-lg-3 col-sm-6"
                                         v-for="(element,index) in products"
                                         :class='[element.product_type.name]' :key="index">

                                        <div class="product-item">
                                            <div class="pi-pic">
                                                <img :src="element.product_img[0].url" alt="">
                                                <div class="sale pp-sale">Sale</div>
                                                <div class="icon">
                                                    <i class="icon_heart_alt"></i>
                                                </div>
                                                <ul>
                                                    <li class="w-icon active"><a href="#"><i
                                                        class="icon_bag_alt"></i></a></li>
                                                    <li class="quick-view">
                                                        <router-link
                                                            :to="{ name: 'product-detail', params: {slugCategory: element.category.slug, slugProductType: element.product_type.slug, slug: element.slug} }">
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
                                                    <h5>{{element.name}}</h5>
                                                </a>
                                                <div class="product-price">
                                                    {{formatPrice(element.price)}}
                                                    <span>{{formatPrice(element.price)}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </isotope>
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
    import isotope from "vueisotope"

    const stringUtil = new StringUtil();
    export default {
        name: "ListProduct",
        components: {
            isotope
        },
        data() {
            return {
                products: [],
                filterOption: "show all",
                option: {
                    itemSelector: ".filter-item",
                    getFilterData: {
                        "show all": function () {
                            return true;
                        },
                        "samsung": function (el) {
                            return el.product_type.name === "Samsung";
                        },
                        "iphone": function (el) {
                            return el.product_type.name === "Iphone";
                        },
                        "huawei": function (el) {
                            return el.product_type.name === "Huawei";
                        },
                        "oppo": function (el) {
                            return el.product_type.name === "Oppo";
                        },
                        "sony": function (el) {
                            return el.product_type.name === "Sony";
                        },
                    }
                }
            }
        },
        methods: {
            getAllProduct() {
                Fire.$emit('onLoading');
                axios.get('/api/getAllProduct')
                .then(response => {
                    console.log(response.data.product);
                    this.products = response.data.product;
                    Fire.$emit('offLoading');
                })
            },
            formatPrice(price) {
                let formatedNumber = price || 0;
                return stringUtil.formatNumber(formatedNumber);
            },
            filter: function (key) {
                this.$refs.cpt.filter(key);
            },
        },
        created() {
            this.getAllProduct();
        },
        // watch: {
        //     products: function (value) {
        //         if (value) {
        //             this.isotope = new Isotope;
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
