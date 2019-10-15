/* eslint-disable */

// Mobile menu toggle
$('.nav-button').on('click', function () {
    $('.navigation>ul').toggleClass('visibility-xl-visible');
    $('.socials').toggleClass('visibility-xl-visible');
    $('.languages').toggleClass('visibility-xl-visible');
    $('.header').toggleClass('header--mobile-menu-open');
});

// Fades out the whole page when clicking links
$('.fadeout-page').on('click', function (e) {
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

    if (window.matchMedia('(min-width: 1200px)').matches) {
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
    if ($background.length && $background.closest('.parallax-wrapper').isInViewport()) {
        $background.css({ top: scrolled * 0.4 + 'px' });
    }
});

// Infinite scroll
if ($('.my-gallery').length) {
    var infScroll = new InfiniteScroll('.my-gallery', {
        path: function () {
            var itemsNumber = (this.loadCount + 1) * 12;
            return window.location.href + '/next?items=' + itemsNumber;
        },
        responseType: 'text',
        history: false,
        scrollThreshold: 50
    });

    infScroll.on('load', function (response) {
        var data = JSON.parse(response);
        var path = window.location.pathname.split('/');
        var alt;

        data.images.forEach(function (element) {
            alt = element.alt ? element.alt : '';
            $('.my-gallery').append("<figure class=\"col-lg-3 col-sm-4 col-6 photo-wrapper\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\" data-aos=\"fade-up\" data-aos-once=\"true\" data-aos-duration=\"800\"><a href=\"/static/images/gallery/".concat(path[3], "/").concat(path[4], "/fullsize/").concat(element.link, "\" class=\"photo\" itemprop=\"contentUrl\" data-size=\"").concat(element.dimensions.width, "x").concat(element.dimensions.height, "\"><img src=\"/static/images/gallery/").concat(path[3], "/").concat(path[4], "/thumbnails/").concat(element.link, "\" alt=\"").concat(alt, "\" class=\"photo__image\" data-src=\"/static/images/gallery/").concat(path[3], "/").concat(path[4], "/thumbnails/").concat(element.link, "\" itemprop=\"thumbnail\"><div class=\"photo__overlay\"><i class=\"far fa-eye\"></i></div></a></figure>"));
        });
    });
}

// Homepage video mute button toggle
$('.mute-toggle').on('click', function () {
    var $video = $('video');
    var isMuted = $video.prop('muted');
    var $mute = $('.fa-volume-mute');
    var $unmute = $('.fa-volume-off');

    if (isMuted === true) {
        $video.prop('muted', false);
        $mute.hide();
        $unmute.show();
    } else {
        $video.prop('muted', true);
        $mute.show();
        $unmute.hide();
    }
});
