/* eslint-disable */
$(function () {
    setTimeout(function () {
        $('#loading-screen').fadeOut("slow");
    }, 500);

    $('.nav-button').on('click', function () {
        $('nav[role="main-nav"]>ul').toggleClass('visibility-xl-visible');
        $('.socials-wrapper').toggleClass('visibility-xl-visible');
        $('.language-wrapper').toggleClass('visibility-xl-visible');
        $('#header-home').toggleClass('mobile-menu-open');
    });

    $('.nav-icon').click(function () {
        $(this).toggleClass('open');
    });

    $('.onload').addClass('loaded');

});
