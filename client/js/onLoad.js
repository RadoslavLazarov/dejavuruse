/* eslint-disable */
$(function () {
    $('#loading-screen').delay(500).fadeOut('slow');
    $('.onload').addClass('loaded');

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
    }

    $('.cookie-content__buttons--agree').on('click', function (e) {
        e.preventDefault();

        $.ajax({
            type: 'GET',
            url: $(this).attr('href'),
            success: function (data) {
                if (data.success) {
                    $('.cookie-warning').fadeOut('slow');
                }
            },
            error: function (request, status, error) {

            },
        });
    });

    if (getCookie('banner_closed') !== 'yes') {
        setTimeout(function () {
            $('body').prepend('<div class=\"pop-up-banner\" data-aos=\"fade-up\" data-aos-once=\"true\" data-aos-duration=\"1000\" data-aos-delay=\"\"><div class=\"pop-up-banner__content\"><i class=\"far fa-times-circle pop-up-banner__close\"></i><img src=\"/static/images/ten-years.jpg\" alt=\"DejaVu 10 years anniversary\"></div></div>');
            $('body').addClass('fixed-body');
            $('#page').addClass('blur-background');
        }, 3000)
    }
});
