/* eslint-disable */

// Mobile menu toggle
$('.nav-button').on('click', function () {
    $('nav[role="main-nav"]>ul').toggleClass('visibility-xl-visible');
    $('.socials-wrapper').toggleClass('visibility-xl-visible');
    $('.language-wrapper').toggleClass('visibility-xl-visible');
    $('header').toggleClass('mobile-menu-open');
});

// Fades out the whole page when clicking links
$('a:not(.image, a[target="blank"], a[href^="tel:"])').click(function (e) {
    e.preventDefault();
    newLocation = this.href;
    $('body').fadeOut('slow', function () {
        window.location = newLocation;
    });
});

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

// Fixed header on scroll
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
