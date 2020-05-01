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

    export default {
        name: "MobileHome",
        components: {Footer, Header},

    }
</script>

<style scoped>

</style>
