<template>
    <div>
        <div class="ps-section masonry-root pt-80">
            <div class="ps-container">
                <div class="ps-section__header mb-50">
                    <h3 class="ps-section__title" data-mask="Promotion">- Our Event</h3>
                </div>
                <div class="ps-section__content pb-50">
                    <div class="masonry-wrapper" data-col-md="3" data-col-sm="2" data-col-xs="1"
                         data-gap="30"
                         data-radio="100%">
                        <div class="ps-masonry">
                            <div class="row">
                                <div class="col-md-8"  >
                                    <div class="row" style="margin-bottom: 30px;">
                                        <div class="col-md-6">
                                            <div class="grid-item__content-wrapper" ><a
                                                class="ps-offer"
                                                href="product-detail.html"><img 
                                                src="assets/customer/images/offer/home-2-1.jpg"
                                                alt=""></a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="grid-item__content-wrapper"><a
                                                class="ps-offer"
                                                href="product-detail.html"><img
                                                src="assets/customer/images/offer/home-2-1.jpg"
                                                alt=""></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="grid-item__content-wrapper"><a
                                                class="ps-offer"
                                                href="product-detail.html"><img
                                                src="assets/customer/images/offer/home-2-1.jpg"
                                                alt=""></a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="grid-item__content-wrapper"><a
                                                class="ps-offer"
                                                href="product-detail.html"><img
                                                src="assets/customer/images/offer/home-2-1.jpg"
                                                alt=""></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="grid-item__content-wrapper"><a class="ps-offer"
                                                                               href="product-detail.html"><img
                                        src="assets/customer/images/offer/home-2-5.jpg"
                                        alt=""></a>
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
        name: "Banner",
        data() {
            return {
                banners:[]
            }
        },
        methods: {
            getAllBanner() {
                axios.get('/api/getBanner')
                .then(response => {
                    console.log(response.data);
                    this.banners = response.data.banner;
                })
            },
        
        },
        created() {
            this.getAllBanner();
        }
    }
</script>

<style scoped>

</style>
