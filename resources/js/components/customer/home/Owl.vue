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
        <ul class="menu">
            <li data-type="type1">Loại 1</li>
            <li data-type="type2">Loại 2</li>
            <li data-type="type3">Loại 4</li>
            <li data-type="all">Tất cả</li>
        </ul>
        <div class="title">Tất cả</div>
        <div class="content">
            <img src="/assets/customer/fashi/img/products/product-1.jpg" class="hinh all type1">
            <img src="/assets/customer/fashi/img/products/product-2.jpg" class="hinh all type2">
            <img src="assets/customer/fashi/img/products/product-3.jpg" class="hinh all type3">
            <img src="/assets/customer/fashi/img/products/product-4.jpg" class="hinh all type4">
            <img src="/assets/customer/fashi/img/products/product-5.jpg" class="hinh all type5">
            <img src="/assets/customer/fashi/img/products/product-6.jpg" class="hinh all type6">
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
        }
    }
</script>

<style scoped>
@import "../../../../../public/assets/customer/OwlCarousel2/dist/assets/owl.carousel.css";
@import "../../../../../public/assets/customer/OwlCarousel2/dist/assets/owl.theme.default.min.css";
</style>
