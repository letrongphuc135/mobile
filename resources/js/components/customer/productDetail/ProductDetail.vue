<template>
    <div>
        <main class="ps-main">
            <div class="test">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                        </div>
                    </div>
                </div>
              </div>

          <div class="ps-section__content">
            <div
              class="ps-owl--colection owl-slider"
              data-owl-auto="true"
              data-owl-loop="true"
              data-owl-speed="5000"
              data-owl-gap="30"
              data-owl-nav="false"
              data-owl-dots="false"
              data-owl-item="4"
              data-owl-item-xs="1"
              data-owl-item-sm="2"
              data-owl-item-md="3"
              data-owl-item-lg="4"
              data-owl-duration="1000"
              data-owl-mousedrag="on"
            >
              <div class="ps-shoes--carousel">
                <div class="ps-shoe">
                  <div class="ps-shoe__thumbnail">
                    <div class="ps-badge">
                      <span>New</span>
                    </div>
                    <a class="ps-shoe__favorite" href="#">
                      <i class="ps-icon-heart"></i>
                    </a>
                    <img src="assets/customer/images/shoe/1.jpg" alt />
                    <a class="ps-shoe__overlay" href="product-detail.html"></a>
                  </div>
                  <div class="ps-shoe__content">
                    <div class="ps-shoe__variants">
                      <div class="ps-shoe__variant normal">
                        <img src="assets/customer/images/shoe/2.jpg" alt />
                        <img src="assets/customer/images/shoe/3.jpg" alt />
                        <img src="assets/customer/images/shoe/4.jpg" alt />
                        <img src="assets/customer/images/shoe/5.jpg" alt />
                      </div>
                      <select class="ps-rating ps-shoe__rating">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                      </select>
                    </div>
                    <div class="ps-shoe__detail">
                      <a class="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                      <p class="ps-shoe__categories">
                        <a href="#">Men shoes</a>,
                        <a href="#">Nike</a>,
                        <a href="#">Jordan</a>
                      </p>
                      <span class="ps-shoe__price">£ 120</span>
                    </div>
                </div>
            </div>
          </main>
    </div>
</template>

<script>
    export default {
        name: "productDetail",
        data() {
            return {
                productDetail: [],
            }
        },
         methods: {
            getproductDetail() {
                axios.get('/api/getDetail/5')
                .then(response => {
                    console.log(response.data.productdetail);
                    this.productDetail = response.data.productdetail;
                })
            },
          
        
        },
        created() {
           // this.getproductDetail();
        }
    }
</script>

<style scoped>

</style>
