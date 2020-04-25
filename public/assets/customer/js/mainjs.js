jQuery(document).ready(function($) {
    $('.content').isotope({
        itemSelector: 'img'
    });
    $('ul li').click(function(event) {
        // var type = $(this).attr('data-type');
        var type = $(this).data('type');
        // console.log(type);
        var ten_loai = $(this).text();
        $('.title').text(ten_loai);
        type = '.'+type;
        $('.content').isotope({
            filter:type
        });
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});



