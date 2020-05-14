<template>
    <div>
        <!-- Breadcrumb Section Begin -->
        <div class="breacrumb-section">
            <div class="container">
                <div class="row"  style="width: 100%">
                    <div class="col-lg-12">
                        <div class="breadcrumb-text product-more">
                            <a href="./home.html" style="position: relative;"><i class="fa fa-home"></i> Home</a>
                            <a href="#">Giỏ hàng</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb Section Begin -->

        <!-- Shopping Cart Section Begin -->
        <section class="shopping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="cart-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Image</th>
                                    <th class="p-name">Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th><i class="ti-close"></i></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(item, index) in this.$store.state.cart" :key="index">
                                    <td class="cart-pic first-row"><img style="width: 170px; height: 170px;" :src="item.product.product_img[0].url" alt=""></td>
                                    <td class="cart-title first-row">
                                        <h2>{{item.product.name}}</h2>
                                    </td>
                                    <td class="p-price first-row">{{formatPrice(item.product.price)}}</td>
                                    <td class="qua-col first-row">
                                        <div class="quantity">
                                            <div class="pro-qty" >
                                                <input type="number" value=1 v-model="item.quantity">
                                            </div>
                                        </div>
                                    </td>
                                    <td class="total-price first-row">{{formatTotalPrice(item.product.price, item.quantity)}}</td>
                                    <td class="close-td first-row" @click="$store.commit('removeFromCart',item)"><i class="ti-close"></i></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="cart-buttons">
                                    <router-link to="/home" class="primary-btn continue-shop">Continue shopping</router-link>
                                    <a href="#" class="primary-btn up-cart">Update cart</a>
                                </div>
                                <div class="discount-coupon">
                                    <h6>Discount Codes</h6>
                                    <form action="#" class="coupon-form">
                                        <input type="text" placeholder="Enter your codes">
                                        <button type="submit" class="site-btn coupon-btn">Apply</button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-4 offset-lg-4">
                                <div class="proceed-checkout">
                                    <ul>
                                        <li class="subtotal">Subtotal <span></span></li>
                                        <li class="cart-total" >Total<span style="font-weight: bold; font-size: 20px">{{formatSubTotalPrice()}}</span></li>
                                    </ul>
                                    <button @click="checkout" class="proceed-btn">PROCEED TO CHECK OUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Shopping Cart Section End -->
    </div>
</template>

<script>
    import StringUtil from "../../../utils/StringUtils"
    const stringUtil = new StringUtil();
    export default {
        name: "Cart",
        methods:{
            formatPrice(price) {
                let formatedNumber = price || 0;
                return stringUtil.formatNumber(formatedNumber);
            },
            formatTotalPrice(price, quantity) {
                let formatedNumber = price || 0;
                formatedNumber *= quantity;
                return stringUtil.formatNumber(formatedNumber);
            },
            formatSubTotalPrice() {
                // let formatedNumber = price || 0;
                // formatedNumber *= quantity;
                var total = 0;
                for(var i = 0; i < this.$store.state.cart.length; i++ ){
                    var item = this.$store.state.cart[i];
                    total += item.product.price * item.quantity;
                }
                return stringUtil.formatNumber(total);
            },
            checkout(){
                var totalNum = 0;
                for(var i = 0; i < this.$store.state.cart.length; i++){
                    var item = this.$store.state.cart[i];
                    this.$store.state.cart[i].total =  item.product.price * item.quantity;
                    totalNum += item.product.price * item.quantity;
                }
                this.$router.push({name: 'checkout'});
                this.$store.commit('updateCart', {cart: this.$store.state.cart, total : totalNum});
            }
        }
    }
</script>

<style scoped>

</style>
