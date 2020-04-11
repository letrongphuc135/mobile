<template>
    <div id="public">
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
        components: {Footer, Header}
    }
</script>

<style scoped>

</style>
