/* eslint-disable */

// Mobile menu toggle
$('.nav-button').on('click', function () {
    $('.navigation>ul').toggleClass('visibility-xl-visible');
    $('.socials').toggleClass('visibility-xl-visible');
    $('.languages').toggleClass('visibility-xl-visible');
    $('.header').toggleClass('header--mobile-menu-open');
});

// Fades out the whole page when clicking links
$('.fadeout-page').click(function (e) {
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
        // $(this).css({ color: '#fff' });
    })
    .on('mouseout touchend', function (e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({ top: relY, left: relX, width: 0, height: 0 })
        // $(this).css({ color: '#755275' });
    });

// Fixed header on scroll
$(window).scroll(function () {
    var $header = $('.header'),
        scroll = $(window).scrollTop();

    if (window.matchMedia('(min-width: 1201px)').matches) {
        if (scroll >= 300) {
            $header.addClass('header--fixed');
            $header.addClass('header--animated');
        } else {
            if (scroll < 200) {
                $header.removeClass('header--fixed');
            }
            $header.removeClass('header--animated');
        }
    }
});

// Animate image on scroll
$(window).on('resize scroll', function () {
    $('.image-scale-animation').each(function () {
        if ($(this).isInViewport()) {
            $(this).css({ 'transform': 'scale(1.01)' });
        } else {
            $(this).css({ 'transform': 'scale(1.2)' });
        }
    });
});

// Scroll animation to Google Maps
$('a[href="#map"]').on('click', function () {
    var thisHref = $(this).attr('href');
    var $el = $(thisHref);
    var elOffset = $el.offset().top;
    var elHeight = $el.height();
    var windowHeight = $(window).innerHeight();
    var offset;

    if (elHeight < windowHeight) {
        offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
    }
    else {
        offset = elOffset;
    }

    $('html, body').animate({ scrollTop: offset }, 700);
});


// Parallax effect
$(window).scroll(function () {
    var scrolled = window.pageYOffset;
    var $background = $('.parallax');
    if ($background.closest('.parallax-wrapper').isInViewport()) {
        $background.css({ top: scrolled * 0.4 + 'px' });
    }
});
