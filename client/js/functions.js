/* eslint-disable */

/**
 * Checking if element is in viewport. The function is attached to jQuery Object.
 * @returns {Boolean}
 */
$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

/**
 * Checking if store is open now.
 * @returns {Boolean}
 */
var workingTime = (function () {
    var date = new Date();
    var day = date.getDay();
    var hours = date.getHours();
    var isOpen;

    $('.working-time__row').each(function (index, value) {
        var $el = $(value);
        var dayIndex = $el.data('day-index');
        var $hour = $el.find('.working-time__hour');
        var hourFrom;
        var hourTo;

        if ($hour.text().indexOf('–') !== -1) {
            hourFrom = $hour.text().split('–')[0].split(':')[0];
            hourTo = $hour.text().split('–')[1].split(':')[0];
        }

        if (dayIndex === day) {
            $el.addClass('working-time--current-day');
            if (hours >= hourFrom && hours < hourTo) {
                if (hourTo - hours === 1) {
                    $('.working-time').addClass('working-time__closes-soon');
                    $('.working-time--closes-soon').show();
                } else {
                    $('.working-time').addClass('working-time__open');
                    $('.working-time--open').show();
                }
                isOpen = true;
            } else {
                $('.working-time').addClass('working-time__closed');
                if (hourFrom - hours === 1) {
                    $('.working-time').addClass('working-time__opens-soon');
                    $('.working-time--opens-soon').show();
                } else {
                    $('.working-time--closed').show();
                }
                isOpen = false;
            }
        }
    });

    return isOpen;
})();
