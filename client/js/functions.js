/* eslint-disable */

function calculateVideoPageHeight() {
    var windowHeight = $(window).outerHeight();
    var headerHight = $('header').outerHeight();
    var footerHight = $('footer').outerHeight();
    var calculateSwiperHeight = windowHeight - (headerHight + footerHight);
    var swiperContainerMarginTop = parseInt($('.swiper-container').css('marginTop'));

    if (window.matchMedia('(min-width: 1201px)').matches) {
        $('.swiper-container').height(windowHeight - (headerHight + footerHight));
    } else {
        $('.swiper-container').height(windowHeight - (swiperContainerMarginTop + footerHight));
    }
}

$(function () {
    calculateVideoPageHeight();
});
$(window).on('resize', function () {
    calculateVideoPageHeight();
});

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
    var getLocale = $('body').data('locale');
    var date = new Date();
    var dayNow = date.getDay();
    var hourNow = date.getHours();
    var isOpen;
    var status = {
        bg: {
            openNow: 'Отворено в момента',
            opensSoon: 'Скоро отваря',
            closedNow: 'Затворено в момента',
            closesSoon: 'Скоро затваря',
            rest: 'Обедна повичка',
        },
        en: {
            openNow: 'Open now',
            opensSoon: 'Opens soon',
            closedNow: 'Closed now',
            closesSoon: 'Closes soon',
            rest: 'Lunch break',
        },
    };

    $('.working-time__row').each(function (index, value) {
        var $el = $(value);
        var dayIndex = $el.data('day-index');
        var $hours = $el.find('.working-time__hour');
        var hourFrom;
        var hourTo;
        var restFrom;
        var restTo;
        var rest = false;

        if ($hours.text().indexOf('–') !== -1) {
            hourFrom = $hours.text().split('–')[0].split(':')[0];
            hourTo = $hours.text().split('–')[1].split(':')[0];
            if ($hours.text().indexOf(',') !== -1) {
                rest = true;
                hourFrom = $hours.text().split(',')[0].split('–')[0].split(':')[0];
                hourTo = $hours.text().split(',')[1].split('–')[1].split(':')[0];
                restFrom = $hours.text().split(',')[0].split('–')[1].split(':')[0];
                restTo = $hours.text().split(',')[1].split('–')[0].split(':')[0];
            }

        }

        if (dayIndex === dayNow) {
            $el.addClass('working-time--current-day');
            if (hourNow >= hourFrom && hourNow < hourTo) {
                if (rest && (hourNow >= restFrom && hourNow < restTo)) {
                    $('.working-time').addClass('working-time__rest');
                    $('.working-time__heading').append('<div class="working-time--rest">' + status[getLocale].rest + '</div>');
                    isOpen = false;
                } else {
                    if (hourTo - hourNow === 1) {
                        $('.working-time').addClass('working-time__closes-soon');
                        $('.working-time__heading').append('<div class="working-time--closes-soon">' + status[getLocale].closesSoon + '</div>');
                    } else {
                        $('.working-time').addClass('working-time__open');
                        $('.working-time__heading').append('<div class="working-time--open">' + status[getLocale].openNow + '</div>');
                    }
                    isOpen = true;
                }
            } else {
                if (hourFrom - hourNow === 1) {
                    $('.working-time').addClass('working-time__opens-soon');
                    $('.working-time__heading').append('<div class="working-time--opens-soon">' + status[getLocale].opensSoon + '</div>');
                } else {
                    $('.working-time').addClass('working-time__closed');
                    $('.working-time__heading').append('<div class="working-time--closed">' + status[getLocale].closedNow + '</div>');
                }
                isOpen = false;
            }
        }
    });

    return isOpen;
})();
