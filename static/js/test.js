/* eslint-disable */
$(function () {
    setTimeout(function () {
        $('#loading-screen').fadeOut("slow");
    }, 500);

    $('.nav-button').on('click', function () {
        const navigation = $('nav[role="main-nav"]');

        if (navigation.css('visibility') === 'hidden') {
            navigation.css({ 'visibility': 'visible' })
        } else if (navigation.css('visibility') === 'visible') {
            setTimeout(function () {
                navigation.css({ 'visibility': 'hidden' })
            }, 500);
        }

        $('.header-bottom').toggleClass('opened');
        $(this).toggleClass('opened');
    });

    $('.nav-icon').click(function () {
        $(this).toggleClass('open');
    });

    $('.onload').addClass('loaded');

});
