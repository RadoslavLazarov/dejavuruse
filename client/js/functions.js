/* eslint-disable */

// function calculateVideoPageHeight() {
//     var windowHeight = $(window).outerHeight();
//     var headerHight = $('header').outerHeight();
//     var footerHight = $('footer').outerHeight();
//     var calculateSwiperHeight = windowHeight - (headerHight + footerHight);
//     var swiperContainerMarginTop = parseInt($('.swiper-container').css('marginTop'));

//     if (window.matchMedia('(min-width: 1201px)').matches) {
//         $('.swiper-container').height(windowHeight - (headerHight + footerHight));
//     } else {
//         $('.swiper-container').height(windowHeight - (swiperContainerMarginTop + footerHight));
//     }
// }

function calculatePageMinHeight() {
    var windowHeight = $(window).outerHeight();
    var footerHeight = $('footer').outerHeight();
    var swiperContainerMarginTop = parseInt($('.swiper-container').css('marginTop'));

    $('.swiper-container').css({ 'min-height': windowHeight - (swiperContainerMarginTop + footerHeight) });
}

$(function () {
    calculatePageMinHeight();
    $(window).on('resize', function () {
        calculatePageMinHeight();
    });
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
    var currentDate = new Date();
    var dayNow = currentDate.getDay();
    // var hourNow = currentDate.getHours();
    var hourNow = 9;
    // var minutesNow = currentDate.getMinutes();
    var minutesNow = 31;
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
        var minutesFrom;
        var hourTo;
        var minutesTo;
        var restHourFrom;
        var restMinutesFrom;
        var restHourTo;
        var restMinutesTo;
        var rest = false;

        if ($hours.text().indexOf('–') !== -1) {
            hourFrom = parseInt($hours.text().split('–')[0].split(':')[0]);
            minutesFrom = parseInt($hours.text().split('–')[0].split(':')[1]);
            hourTo = parseInt($hours.text().split('–')[1].split(':')[0]);
            minutesTo = parseInt($hours.text().split('–')[1].split(':')[1]);

            if ($hours.text().indexOf(',') !== -1) {
                rest = true;
                hourFrom = parseInt($hours.text().split(',')[0].split('–')[0].split(':')[0]);
                minutesFrom = parseInt($hours.text().split(',')[0].split('–')[0].split(':')[1]);
                hourTo = parseInt($hours.text().split(',')[1].split('–')[1].split(':')[0]);
                minutesTo = parseInt($hours.text().split(',')[1].split('–')[1].split(':')[1]);
                restHourFrom = parseInt($hours.text().split(',')[0].split('–')[1].split(':')[0]);
                restMinutesFrom = parseInt($hours.text().split(',')[0].split('–')[1].split(':')[1]);
                restHourTo = parseInt($hours.text().split(',')[1].split('–')[0].split(':')[0]);
                restMinutesTo = parseInt($hours.text().split(',')[1].split('–')[0].split(':')[1]);
            }

        }

        if (dayIndex === dayNow) {
            $el.addClass('working-time--current-day');
            var openHour = new Date().setHours(hourFrom, minutesFrom);
            var closeHour = new Date().setHours(hourTo, minutesTo);
            var restFrom = new Date().setHours(restHourFrom, restMinutesFrom);
            var restTo = new Date().setHours(restHourTo, restMinutesTo);
            var openSoon = new Date().setHours(hourFrom - 1, minutesFrom);
            var closeSoon = new Date().setHours(hourTo - 1, minutesTo);
            // currentDate.setHours(9, 40);

            if (currentDate >= openHour && currentDate < closeHour) {
                if (rest && (currentDate >= restFrom && currentDate < restTo)) {
                    console.log('rest');
                    $('.working-time').addClass('working-time__rest');
                    $('.working-time__heading').append('<div class="working-time--rest">' + status[getLocale].rest + '</div>');
                    isOpen = false;
                } else if (currentDate >= closeSoon && currentDate < closeHour) {
                    console.log('close soon');
                    $('.working-time').addClass('working-time__closes-soon');
                    $('.working-time__heading').append('<div class="working-time--closes-soon">' + status[getLocale].closesSoon + '</div>');
                    isOpen = true;
                } else {
                    console.log('open');
                    $('.working-time').addClass('working-time__open');
                    $('.working-time__heading').append('<div class="working-time--open">' + status[getLocale].openNow + '</div>');
                    isOpen = true;
                }
            } else if (currentDate >= openSoon && currentDate < openHour) {
                console.log('open soon');
                $('.working-time').addClass('working-time__opens-soon');
                $('.working-time__heading').append('<div class="working-time--opens-soon">' + status[getLocale].opensSoon + '</div>');
                isOpen = false;
            } else {
                console.log('closed');
                $('.working-time').addClass('working-time__closed');
                $('.working-time__heading').append('<div class="working-time--closed">' + status[getLocale].closedNow + '</div>');
                isOpen = false;
            }
        }
    });

    return isOpen;
})();
