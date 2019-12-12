/* eslint-disable */
$(function () {
    $('#loading-screen').delay(500).fadeOut('slow');
    $('.onload').addClass('loaded');
    FB.CustomerChat.show(false); // hide messanger dialog

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
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
});
