<template>
    <div id="public">
        <Header></Header>
        <Banner></Banner>
        <ListProduct></ListProduct>
        <Policy></Policy>
        <ListPost></ListPost>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../customer/Header";
    import Banner from "../customer/Banner";
    import ListProduct from "../customer/ListProduct"
    import ListPost from "../customer/ListPost";
    import Policy from "../customer/Policy";
    import Footer from "../customer/Footer";
    export default {
        components: {Footer, Policy, ListPost, Banner, Header, ListProduct}
    }
</script>

<style scoped>

</style>
