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
    name: /^([^0-9]*)$/
}

var errorMessage = {
    bg: {
        fieldRequired: 'задължително поле',
        fieldInvalid: 'невалидно поле'
    },
    en: {
        fieldRequired: 'required field',
        fieldInvalid: 'invalid field'
    }
};

var getLocale = $('body').data('locale');

// Form fields validation
$('.form-field--validation').on('focusout input', function () {
    var $inputField = $(this);
    var inputName = $inputField.attr('name');
    var $error = $(this).next('.error');

    if ($inputField.val()) {
        $inputField.removeClass('form-field--required');
        $error.text('');
        if ($inputField.val().match(regex[inputName])) {
            $inputField.removeClass('form-field--invalid');
            $error.text('');
        } else {
            $inputField.addClass('form-field--invalid');
            $error.text(errorMessage[getLocale].fieldInvalid);
        }
    } else {
        if ($inputField.attr('required')) {
            $inputField.removeClass('form-field--invalid');
            $inputField.addClass('form-field--required');
            $error.text(errorMessage[getLocale].fieldRequired);
        } else {
            $inputField.removeClass('form-field--invalid');
            $error.text('');
        }
    }
});
