<template>
    <div>
        <!-- Breadcrumb Section Begin -->
        <div class="breacrumb-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-text product-more">
                            <a href="./home.html"><i class="fa fa-home"></i> Home</a>
                            <a href="./shop.html">Shop</a>
                            <span>Shopping Cart</span>
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
                                    <td class="cart-pic first-row"><img style="width: 170px; height: 170px;" :src="item.product.image" alt=""></td>
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
                                    <td class="close-td first-row"><i class="ti-close"></i></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="cart-buttons">
                                    <a href="#" class="primary-btn continue-shop">Continue shopping</a>
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
                                        <li class="subtotal">Subtotal <span>$240.00</span></li>
                                        <li class="cart-total">Total <span>$240.00</span></li>
                                    </ul>
                                    <a href="#" class="proceed-btn">PROCEED TO CHECK OUT</a>
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
        }
    }
</script>

<style scoped>

</style>
