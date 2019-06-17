/* eslint-disable */

$('.nav-button').on('click', function () {
    $('nav[role="main-nav"]>ul').toggleClass('visibility-xl-visible');
    $('.socials-wrapper').toggleClass('visibility-xl-visible');
    $('.language-wrapper').toggleClass('visibility-xl-visible');
    $('header').toggleClass('mobile-menu-open');
});

AOS.init();

setTimeout(function () {
    $('#loading-screen').fadeOut("slow");
}, 500);
// setTimeout(function () {
//     $('#loading-screen').detach();
// }, 1000);



$('.nav-icon').click(function () {
    $(this).toggleClass('open');
});

$('.onload').addClass('loaded');

// Button splash animation
$('.button')
    .on('mouseenter touchstart', function (e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top,
            // Set double width from button to span, height equals width.
            width = $(this).outerWidth() * 2 + 7,
            height = $(this).outerWidth() * 2 + 7;
        $(this).find('span').css({ top: relY, left: relX, width: width, height: height })
        $(this).css({ color: '#fff' });
    })
    .on('mouseout touchend', function (e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({ top: relY, left: relX, width: 0, height: 0 })
        $(this).css({ color: '#755275' });
    });

$(window).scroll(function () {
    var sticky = $('#header-default'),
        scroll = $(window).scrollTop();

    if (window.matchMedia('(min-width: 1201px)').matches) {
        if (scroll >= 100) {
            sticky.addClass('fixed');
        } else {
            sticky.removeClass('fixed');
        }
    }
});


