<template>
    <div>
        <div class="header--sidebar"></div>
        <header class="header">
            <div class="header__top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                            <p> <i class="fas fa-mobile"></i> 460 West 34th Street, 15th floor, New York  -  Hotline: 804-377-3580 - 804-399-3580</p>
                        </div>
                        <div class="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
                            <div class="header__actions"><a href="#">Login & Regiser</a>
                                <div class="btn-group ps-dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language<i class="fa fa-angle-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">Japanese</a></li>
                                        <li><a href="#">Chinese</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navigation">
                <div class="container-fluid">
                    <div class="navigation__column left">
                        <div class="header__logo"><a class="ps-logo" href="index.html"><img src="images/logo.png" alt=""></a></div>
                    </div>
                    <div class="navigation__column center">
                        <ul class="main-menu menu">
                             <li class="menu-item menu-item-has-children dropdown" v-for="(category, index) in categories" :key="index"><a href="index.html">{{category.name}}</a>
                                <ul class="sub-menu" >
                                    <li class="menu-item" v-for="(productType, indexPro) in category.product_type" :key="indexPro"><a href="">{{productType.name}}</a></li>
                                   
                                </ul>
                            </li>
                            <!--<li class="menu-item menu-item-has-children has-mega-menu" v-for="(category, index) in categories" :key="index"><a href="#">{{category.name}}</a>
                                <div class="mega-menu">
                                    <div class="mega-wrap">
                                         <div class="mega-column">
                                            <ul class="mega-item mega-features">
                                                <li><a href="product-listing.html">NEW RELEASES</a></li>
                                                <li><a href="product-listing.html">FEATURES SHOES</a></li>
                                                <li><a href="product-listing.html">BEST SELLERS</a></li>
                                                <li><a href="product-listing.html">NOW TRENDING</a></li>
                                                <li><a href="product-listing.html">SUMMER ESSENTIALS</a></li>
                                                <li><a href="product-listing.html">MOTHER'S DAY COLLECTION</a></li>
                                                <li><a href="product-listing.html">FAN GEAR</a></li>
                                            </ul>
                                        </div>
                                        <div class="mega-column" >
                                            <h4 class="mega-heading">Hãng Sản Xuất</h4>
                                            <ul class="mega-item">
                                                <li v-for="(productType, indexPro) in category.product_type" :key="indexPro"><a href="product-listing.html">{{productType.name}}</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li class="menu-item"><a href="#">Women</a></li>
                            <li class="menu-item"><a href="#">Kids</a></li>
                            <li class="menu-item menu-item-has-children dropdown"><a href="#">News</a>
                                <ul class="sub-menu">
                                    <li class="menu-item menu-item-has-children dropdown"><a href="blog-grid.html">Blog-grid</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="blog-grid.html">Blog Grid 1</a></li>
                                            <li class="menu-item"><a href="blog-grid-2.html">Blog Grid 2</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><a href="blog-list.html">Blog List</a></li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-has-children dropdown"><a href="#">Contact</a>
                                <ul class="sub-menu">
                                    <li class="menu-item"><a href="contact-us.html">Contact Us #1</a></li>
                                    <li class="menu-item"><a href="contact-us.html">Contact Us #2</a></li>
                                </ul>
                            </li> -->
                        </ul>
                    </div>
                    <div class="navigation__column right">
                        <form class="ps-search--header" action="do_action" method="post">
                            <input class="form-control" type="text" placeholder="Search Product…">
                            <button><i class="ps-icon-search"></i></button>
                        </form>
                        <div class="ps-cart"><a class="ps-cart__toggle" href="#"><span><i>20</i></span><i class="ps-icon-shopping-cart"></i></a>
                            <div class="ps-cart__listing">
                                <div class="ps-cart__content">
                                    <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                                        <div class="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src="images/cart-preview/1.jpg" alt=""></div>
                                        <div class="ps-cart-item__content"><a class="ps-cart-item__title" href="product-detail.html">Amazin’ Glazin’</a>
                                            <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                                        </div>
                                    </div>
                                    <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                                        <div class="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src="images/cart-preview/2.jpg" alt=""></div>
                                        <div class="ps-cart-item__content"><a class="ps-cart-item__title" href="product-detail.html">The Crusty Croissant</a>
                                            <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                                        </div>
                                    </div>
                                    <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                                        <div class="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src="images/cart-preview/3.jpg" alt=""></div>
                                        <div class="ps-cart-item__content"><a class="ps-cart-item__title" href="product-detail.html">The Rolling Pin</a>
                                            <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="ps-cart__total">
                                    <p>Number of items:<span>36</span></p>
                                    <p>Item Total:<span>£528.00</span></p>
                                </div>
                                <div class="ps-cart__footer"><a class="ps-btn" href="cart.html">Check out<i class="ps-icon-arrow-left"></i></a></div>
                            </div>
                        </div>
                        <div class="menu-toggle"><span></span></div>
                    </div>
                </div>
            </nav>
        </header>
        <div class="header-services">
            <div class="ps-services owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="7000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="false" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">
                <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
                <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
                <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                categories: [],
                producttypes: [],
            }
        },
         methods: {
            getAllCategory() {
                axios.get('/api/admin/category')
                .then(response => {
                    console.log(response.data);
                    this.categories = response.data.category;
                })
            },
        
        },
        created() {
            this.getAllCategory();
        }
    }
</script>

<style scoped>

</style>
