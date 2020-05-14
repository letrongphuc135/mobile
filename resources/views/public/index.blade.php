<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sky - Homepage</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts-->
    <link
        href="https://fonts.googleapis.com/css?family=Archivo+Narrow:300,400,700%7CMontserrat:300,400,500,600,700,800,900"
        rel="stylesheet">
    <link rel="stylesheet" href="/assets/customer/plugins/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/customer/plugins/ps-icon/style.css">
    {{--<!-- CSS Library-->--}}
    {{--<link rel="stylesheet" href="/assets/customer/plugins/bootstrap/dist/css/bootstrap.min.css">--}}
    {{--<link rel="stylesheet" href="/assets/customer/plugins/owl-carousel/assets/owl.carousel.css">--}}
    {{--<link rel="stylesheet"--}}
    {{--href="/assets/customer/plugins/jquery-bar-rating/dist/themes/fontawesome-stars.css">--}}
    {{--<link rel="stylesheet" href="/assets/customer/plugins/slick/slick/slick.css">--}}
    <link rel="stylesheet" href="/assets/customer/plugins/bootstrap-select/dist/css/bootstrap-select.min.css">
    {{--<link rel="stylesheet" href="/assets/customer/plugins/Magnific-Popup/dist/magnific-popup.css">--}}
    {{--<link rel="stylesheet" href="/assets/customer/plugins/jquery-ui/jquery-ui.min.css">--}}
    {{--<link rel="stylesheet" href="/assets/customer/plugins/revolution/css/settings.css">--}}
    {{--<link rel="stylesheet" href="/assets/customer/plugins/revolution/css/layers.css">--}}
    {{--<link rel="stylesheet" href="/assets/customer/plugins/revolution/css/navigation.css">--}}
    {{--<!-- Custom-->--}}
    <link rel="stylesheet" href="/assets/customer/css/style.css">

    {{--<!-- Css Styles -->--}}
    <link rel="stylesheet" href="/assets/customer/fashi/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="/assets/customer/fashi/css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="/assets/customer/fashi/css/themify-icons.css" type="text/css">
    <link rel="stylesheet" href="/assets/customer/fashi/css/elegant-icons.css" type="text/css">
    <link rel="stylesheet" href="/assets/customer/fashi/css/owl.carousel.min.css" type="text/css">
    <link rel="stylesheet" href="/assets/customer/fashi/css/nice-select.css" type="text/css">
    <link rel="stylesheet" href="/assets/customer/fashi/css/jquery-ui.min.css" type="text/css">
    <link rel="stylesheet" href="/assets/customer/fashi/css/slicknav.min.css" type="text/css">
    <link rel="stylesheet" href="/assets/customer/fashi/css/style.css" type="text/css">

    <link rel="stylesheet" href="/assets/customer/OwlCarousel2/dist/assets/owl.carousel.css" type="text/css">
    <link rel="stylesheet" href="/assets/customer/OwlCarousel2/dist/assets/owl.theme.default.min.css" type="text/css">

</head>

<body>

<div id="app">
    <router-view></router-view>

</div>

<script type="text/javascript" src="/assets/customer/plugins/jquery/dist/jquery.min.js"></script>
<script type="text/javascript"
        src="/assets/customer/plugins/bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/assets/customer/plugins/jquery-ui/jquery-ui.min.js"></script>
<script type="text/javascript"
        src="/assets/customer/plugins/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
<!-- Js Plugins -->
<script src="/assets/customer/fashi/js/jquery-3.3.1.min.js"></script>
{{--<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>--}}
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
{{--<script src="/assets/customer/fashi/js/jquery-3.3.1.min.js"></script>--}}
<script src="/assets/customer/fashi/js/bootstrap.min.js"></script>
<script src="/assets/customer/fashi/js/jquery-ui.min.js"></script>
<script src="/assets/customer/fashi/js/jquery.countdown.min.js"></script>
<script src="/assets/customer/fashi/js/jquery.nice-select.min.js"></script>
<script src="/assets/customer/fashi/js/jquery.zoom.min.js"></script>
<script src="/assets/customer/fashi/js/jquery.dd.min.js"></script>
<script src="/assets/customer/fashi/js/jquery.slicknav.js"></script>
{{--<script src="/assets/customer/fashi/js/owl.carousel.min.js"></script>--}}

<script src="/assets/customer/js/mainjs.js" type="text/javascript"></script>
{{--<script src="/assets/customer/fashi/js/main.js"></script>--}}
<script src="{{ asset('js/app.js') }}" defer></script>
<script src="/assets/customer/OwlCarousel2/docs/assets/owlcarousel/owl.carousel.js"></script>

</body>
</html>
