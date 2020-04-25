<template>
    <div>
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
                firstName: "foo"
            }
        },
        watch:{
            firstName: function (val) {
                if (val){
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
                    })
                }
            }
        },
    }
</script>

<style scoped>
@import "../../../../../public/assets/customer/OwlCarousel2/dist/assets/owl.carousel.css";
@import "../../../../../public/assets/customer/OwlCarousel2/dist/assets/owl.theme.default.min.css";
</style>
