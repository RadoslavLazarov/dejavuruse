$(function () {
    setTimeout(function () {
        $('#loading-screen').fadeOut("slow");
    }, 500);

    $('.nav-button').on('click', function () {
        $('.main-nav-wrapper').toggleClass('d-none');
    });

    $('.nav-icon').click(function () {
        $(this).toggleClass('open');
    });

    $('.onload').addClass('loaded');


});
