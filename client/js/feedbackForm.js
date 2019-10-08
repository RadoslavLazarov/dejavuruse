/* eslint-disable*/

var getLocale = $('body').data('locale');

var swalText = {
    bg: {
        reqError: 'Грешна заявка',
        formError: 'Формата има невалидни или непопълнени полета!',
        formSuccess: 'Съобщението е изпратено!'
    },
    en: {
        reqError: 'Request error',
        formError: 'The form has invalid or empty fields!',
        formSuccess: 'Your message has been sent!'
    }
};

$('#feedback-form').on('submit', function (e) {
    e.preventDefault();
    var token = grecaptcha.getResponse();
    var $form = $(this);
    var $formField = $('#feedback-form .form-field');

    var errorCheck = (function () {
        var err;
        if ($formField.hasClass('form-field--invalid') || $formField.hasClass('form-field--required')) {
            err = true;
        } else {
            err = false;
        }
        return err;
    })();

    if (!errorCheck && token) {
        $('#loading-screen').css({ 'background-color': 'transparent' }).fadeIn('slow');
        $('#feedback-form').append('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');

        $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            data: {
                email: $form.find('input[name="email"]').val(),
                subject: $form.find('input[name="subject"]').val(),
                name: $form.find('input[name="name"]').val(),
                phone: $form.find('input[name="phone"]').val(),
                event: $form.find('input[name="event"]').val(),
                date: $form.find('input[name="date"]').val(),
                text: $form.find('textarea').val(),
                token: token
            },
            success: function (data) {
                $('#loading-screen').fadeOut('slow');

                if (data.captcha.error || data.email.error) {
                    $('.feedback-form-container > .error').show().text(data.captcha.error || data.email.error);
                } else if (data.captcha.success && data.email.success) {
                    swal({
                        title: swalText[getLocale].formSuccess,
                        icon: 'success',
                    }).then(function () {
                        location.reload();
                    });
                }
            },
            error: function (request, status, error) {
                $('#loading-screen').fadeOut('slow');
                swal({
                    title: swalText[getLocale].reqError,
                    icon: 'error',
                })
            },
        });
    } else {
        swal({
            title: swalText[getLocale].formError,
            icon: 'error',
        })
    }
});
