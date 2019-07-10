/* eslint-disable */

// Check on load and on input event if form field has value and add class to it
$('.form-field').on('input', function () {
    if ($(this).val()) {
        $(this).addClass('has-value');
    } else {
        $(this).removeClass('has-value');
    }
});

$('.form-field').each(function () {
    if ($(this).val()) {
        $(this).addClass('has-value');
    }
});

var regex = {
    email: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g,
    phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
    name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
}

// Check form field for error and add class to it
$('.form-field--validate').on('focusout input', function () {
    var $inputField = $(this);
    var $errorInvalid = $(this).next('.error').find('.error--invalid');
    var $errorRequired = $(this).next('.error').find('.error--required');
    var inputName = $inputField.attr('name');

    if ($inputField.val()) {
        $inputField.removeClass('form-field--required');
        $errorRequired.hide();
        if ($inputField.val().match(regex[inputName])) {
            $inputField.removeClass('form-field--invalid');
            $errorInvalid.hide();
        } else {
            $inputField.addClass('form-field--invalid');
            $errorInvalid.show();
        }
    } else {
        $inputField.addClass('form-field--required');
        $errorRequired.show();
        $inputField.removeClass('form-field--invalid');
        $errorInvalid.hide();
    }
});
