$(document).ready(function() {
    // active item on navbar
    $('.navbar li > a').click(function() {
        $('.navbar li').removeClass("active-item");
        $(this).parent().addClass("active-item");
    });

    headerHeight = $('.top-bar').outerHeight();
    navbarHeight = $('.navbar').outerHeight();
    $('body').css({ "padding-top": headerHeight + navbarHeight });

    $(window).scroll(function() {
        var windowSize = $(window).width();
        var scroll = $(window).scrollTop();
        if (scroll > 48 && windowSize > 767) {
            $(".navbar").css({ "top": "0" });
        } else {
            $(".navbar").css({ "top": "55px" });
        }
    })

    // get direction of html
    var mydir = $("html").attr("dir");

    if (mydir == 'rtl') { var rtlVal = true } else { var rtlVal = false }

    // latest offers slider
    $('.customers-slider').owlCarousel({
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        margin: 40,
        nav: true,
        dots: false,
        rtl: rtlVal,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // latest offers slider
    $('.services-slider').owlCarousel({
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        autoplayTimeout: 2500,
        margin: 30,
        dots: false,
        rtl: rtlVal,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    // scroll to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('.scrollTop-btn').fadeIn();
        } else {
            $('.scrollTop-btn').fadeOut();
        }
    });

    $('.scrollTop-btn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
        return false;
    });

    $('.pricing-plans').click(function() {
        $('.first-step').hide();
        $('.form-pricing').show();
    })

    $('.request-support').click(function() {
        $('.first-step').hide();
        $('.request-support-chat').show();
    })

    $('.back-btn').click(function() {
        $('.form-pricing').hide();
        $('.first-step').show();
    })
    $('.back-btn').click(function() {
        $('.request-support-chat').hide();
        $('.first-step').show();
    })

    $('.video-overlay a').on('click', function(e) {
        e.preventDefault();
        $('.embed-responsive-item').get(0).play();
        $(this).parent().addClass('hide-overlay');
    })

    new WOW().init();
})