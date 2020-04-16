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
                    <div class="masonry-wrapper" data-col-md="3" data-col-sm="2" data-col-xs="1"
                         data-gap="30"
                         data-radio="100%">
                        <div class="ps-masonry">
                            <div class="grid-sizer"></div>
                            <div class="row">
                                <div class="col-md-3" v-for="(product, index) in products"
                                     :key="`${index}-${product.id}`" :class="product.name">
                                    <div class="grid-item nike" style="width: 100%">
                                        <div class="grid-item__content-wrapper">
                                            <div class="ps-shoe mb-30">
                                                <div class="ps-shoe__thumbnail">
                                                    <div class="ps-badge"><span>New</span></div>
                                                    <div
                                                        class="ps-badge ps-badge--sale ps-badge--2nd">
                                                        <span>-35%</span></div>
                                                    <a class="ps-shoe__favorite" href="#"><i
                                                        class="ps-icon-heart"></i></a><img
                                                    :src="product.image"
                                                    alt=""><router-link
                                                    class="ps-shoe__overlay"
                                                    :to="{ name: 'product-detail', params: {name: product.name, id: product.id} }"></router-link>
                                                </div>
                                                <div class="ps-shoe__content">
                                                    <div class="ps-shoe__variants">
                                                        <div>
                                                            mo ta ngan dsdsdsdsds dsdsds dsdsds
                                                            dsdsdssdsds dsdsssdddddddd
                                                        </div>
                                                        <!-- <select class="ps-rating ps-shoe__rating">
                                                        <option value="1">1</option>
                                                        <option value="1">2</option>
                                                        <option value="1">3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                        </select> -->
                                                    </div>
                                                    <div class="ps-shoe__detail"><a
                                                        class="ps-shoe__name" href="#">Air Jordan 7
                                                        Retro</a>
                                                        <p class="ps-shoe__categories"><a href="#">Men
                                                            shoes</a>,<a href="#"> Nike</a>,<a
                                                            href="#"> Jordan</a></p><span
                                                            class="ps-shoe__price">
                <del>£220</del> £ 120</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListProduct",
        data() {
            return {
                products: [],
            }
        },
        methods: {
            getAllProduct() {
                axios.get('/api/admin/product')
                .then(response => {
                    console.log(response.data.data);
                    this.products = response.data.data;
                })
            },
        },
        created() {
            this.getAllProduct();
        }
    }
</script>

<style scoped>

</style>
