<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sky - Homepage</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts-->

    <link rel="stylesheet" href="/assets/customer/OwlCarousel2/dist/assets/owl.carousel.css" type="text/css">
    <link rel="stylesheet" href="/assets/customer/OwlCarousel2/dist/assets/owl.theme.default.min.css" type="text/css">
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
        }
        html,body{
            width: 100%;
            height: 100%;
            background: #f5f5f5;
        }
        ul.menu{
            width: 400px;
            margin: auto;
            margin-top:20px;
            display: flex;
            justify-content: space-between;
        }
        li {
            list-style: none;
            background: #fff;
            color: #212121;
            padding: 10px 12px;
            font-size: 16px;
            cursor: pointer;
            box-shadow: 3px 5px 5px rgb(0,0,0,0.23);
            border-radius: 2px;
        }
        .title {
            padding: 10px 12px;
            text-align: center;
            font-size: 36px;
            color: #212121;
        }
        .content{
            width: 1170px;
            margin: auto;
        }
        img.hinh {
            width: 30%;
            margin: 10px;
        }
    </style>

</head>

<body>

<div id="app">
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


<!-- Js Plugins -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
{{--<script src="/assets/customer/fashi/js/jquery-3.3.1.min.js"></script>--}}
{{--<script src="/assets/customer/fashi/js/bootstrap.min.js"></script>--}}
{{--<script src="/assets/customer/fashi/js/jquery-ui.min.js"></script>--}}
{{--<script src="/assets/customer/fashi/js/jquery.countdown.min.js"></script>--}}
{{--<script src="/assets/customer/fashi/js/jquery.nice-select.min.js"></script>--}}
{{--<script src="/assets/customer/fashi/js/jquery.zoom.min.js"></script>--}}
{{--<script src="/assets/customer/fashi/js/jquery.dd.min.js"></script>--}}
{{--<script src="/assets/customer/fashi/js/jquery.slicknav.js"></script>--}}
{{--<script src="/assets/customer/fashi/js/owl.carousel.min.js"></script>--}}
{{--<script src="/assets/customer/fashi/js/main.js"></script>--}}
<script src="/assets/customer/OwlCarousel2/docs/assets/owlcarousel/owl.carousel.js"></script>
<script src="{{ asset('js/app.js') }}" defer></script>

<script src="/assets/customer/js/mainjs.js" type="text/javascript"></script>


</body>
</html>
