<template>
    <div style="clear: both">
        <div class="slide"></div>

        <h2>Abc</h2>
        <div class="owl-carousel owl-theme">
            <div class="item"><h4>1</h4></div>
            <div class="item"><h4>2</h4></div>
            <div class="item"><h4>3</h4></div>
            <div class="item"><h4>4</h4></div>
            <div class="item"><h4>5</h4></div>
            <div class="item"><h4>6</h4></div>
            <div class="item"><h4>7</h4></div>
            <div class="item"><h4>8</h4></div>
            <div class="item"><h4>9</h4></div>
            <div class="item"><h4>10</h4></div>
            <div class="item"><h4>11</h4></div>
            <div class="item"><h4>12</h4></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Owl",
        data(){
            return{
                firstName: "foo",
                products: [],
            }
        },
        created() {
            this.getAllProduct();
        },
        methods: {
            // getAllProduct() {
            //     //Fire.$emit('onLoading');
            //     return new Promise((resolve, reject) => {
            //         axios.get('/api/getAllProduct')
            //         .then(response => {
            //             console.log(response.data.product);
            //             this.products = response.data.product;
            //             //Fire.$emit('offLoading');
            //         })
            //     })
            // },
            getAllProduct() {
                return new Promise((resolve, reject) => {
                    axios.get('/api/getAllProduct').then((data) => {
                        this.products = data.data.product;
                        resolve();
                    }).catch(error => reject(error));
                });
            }
        },
        mounted() {
            this.getAllProduct().then(() => {
                $('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:10,
                    nav:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:5
                        }
                    }
                });
            })
        },
        // watch: {
        //     products: function (value) {
        //         if (value) {
        //             jQuery(document).ready(function () {
        //                 $('.owl-carousel').owlCarousel({
        //                     loop:true,
        //                     margin:10,
        //                     nav:true,
        //                     responsive:{
        //                         0:{
        //                             items:1
        //                         },
        //                         600:{
        //                             items:3
        //                         },
        //                         1000:{
        //                             items:5
        //                         }
        //                     }
        //                 })
        //             });
        //         }
        //     }
        // }
    }
</script>

<style scoped>
@import "../../../../../public/assets/customer/OwlCarousel2/dist/assets/owl.carousel.css";
@import "../../../../../public/assets/customer/OwlCarousel2/dist/assets/owl.theme.default.min.css";
</style>
