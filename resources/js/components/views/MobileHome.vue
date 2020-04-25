<template>
    <div>
        <!-- Page Preloder -->
        <!--<div id="preloder">-->
            <!--<div class="loader"></div>-->
        <!--</div>-->
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../customer/Header";
    import Footer from "../customer/Footer";

    // import ('../../../../public/assets/customer/fashi/css/bootstrap.min.css');
    // import ('../../../../public/assets/customer/fashi/css/font-awesome.min.css');
    // import ('../../../../public/assets/customer/fashi/css/themify-icons.css');
    // import ('../../../../public/assets/customer/fashi/css/elegant-icons.css');
    // // import ('../../../../public/assets/customer/fashi/css/owl.carousel.min.css');
    // import ('../../../../public/assets/customer/fashi/css/nice-select.css');
    // // import ('../../../../public/assets/customer/fashi/css/jquery-ui.min.css');
    // import ('../../../../public/assets/customer/fashi/css/slicknav.min.css');
    // import ('../../../../public/assets/customer/fashi/css/style.css');
    // //
    // import ('../../../../public/assets/customer/plugins/ps-icon/style.css');
    // // import ('../../../../public/assets/customer/plugins/bootstrap/dist/css/bootstrap.min.css');
    // // import ('../../../../public/assets/customer/plugins/owl-carousel/assets/owl.carousel.css');
    // import ('../../../../public/assets/customer/plugins/jquery-bar-rating/dist/themes/fontawesome-stars.css');
    // import ('../../../../public/assets/customer/plugins/slick/slick/slick.css');
    // // import ('../../../../public/assets/customer/plugins/bootstrap-select/dist/css/bootstrap-select.min.css');
    // import ('../../../../public/assets/customer/plugins/Magnific-Popup/dist/magnific-popup.css');
    // import ('../../../../public/assets/customer/plugins/jquery-ui/jquery-ui.min.css');
    // import ('../../../../public/assets/customer/plugins/revolution/css/layers.css');
    // import ('../../../../public/assets/customer/plugins/revolution/css/settings.css');
    // // import ('../../../../public/assets/customer/plugins/revolution/css/navigation.css');
    // import ('../../../../public/assets/customer/css/style.css');
    //
    //
    // import ('../../../../public/assets/customer/fashi/js/bootstrap.min.js');
    // import ('../../../../public/assets/customer/fashi/js/jquery-ui.min.js');
    // import ('../../../../public/assets/customer/fashi/js/jquery.countdown.min.js');
    // import ('../../../../public/assets/customer/fashi/js/jquery.nice-select.min.js');
    // import ('../../../../public/assets/customer/fashi/js/jquery.zoom.min.js');
    // import ('../../../../public/assets/customer/fashi/js/jquery.dd.min.js');
    // import ('../../../../public/assets/customer/fashi/js/jquery.slicknav.js');
    // import ('../../../../public/assets/customer/fashi/js/owl.carousel.min.js');
    // import ('../../../../public/assets/customer/fashi/js/main.js');


    // import ('../../../../public/assets/customer/plugins/jquery/dist/jquery.min.js');
    // import ('../../../../public/assets/customer/plugins/bootstrap/dist/js/bootstrap.min.js');
    // import ('../../../../public/assets/customer/plugins/jquery-bar-rating/dist/jquery.barrating.min.js');
    // import ('../../../../public/assets/customer/plugins/owl-carousel/owl.carousel.min.js');
    // import ('../../../../public/assets/customer/plugins/gmap3.min.js');
    // import ('../../../../public/assets/customer/plugins/isotope.pkgd.min.js');
    // import ('../../../../public/assets/customer/plugins/bootstrap-select/dist/js/bootstrap-select.min.js');
    // import ('../../../../public/assets/customer/plugins/jquery.matchHeight-min.js');
    // import ('../../../../public/assets/customer/plugins/slick/slick/slick.min.js');
    // import ('../../../../public/assets/customer/plugins/jquery-ui/jquery-ui.min.js');
    // import ('../../../../public/assets/customer/plugins/Magnific-Popup/dist/jquery.magnific-popup.min.js');

    export default {
        name: "MobileHome",
        components: {Footer, Header}
    }
</script>

<style scoped>

</style>
