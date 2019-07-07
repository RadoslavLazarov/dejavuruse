/* eslint-disable*/

$('#feedback-form form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);

    grecaptcha.ready(function () {
        grecaptcha.execute('6LfhT6wUAAAAACyWaCAedFLOJyDzksGZ9LChXbC0', { action: 'feedback' }).then(function (token) {
            $('#feedback-form').append('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
            $.ajax({
                type: 'POST',
                url: '/contacts/feedback',
                data: {
                    email: $form.find('input[name="email"]').val(),
                    subject: $form.find('input[name="subject"]').val(),
                    name: $form.find('input[name="name"]').val(),
                    phone: $form.find('input[name="phone"]').val(),
                    event: $form.find('input[name="event"]').val(),
                    date: $form.find('input[name="date"]').val(),
                    text: $form.find('input[name="text"]').val(),
                    token: token
                },
                cache: false,
                success: function (data) {
                    if (data.responseError) {
                        $('#feedback-form').append('<div class="error">' + data.responseError + '</div>');
                    } else if (data.responseSuccess) {
                        location.reload();
                    }
                },
                error: function (err) {
                    $('#feedback-form').append('<div class="error">ERROR</div>');
                },
            });
        });
    });
});