/* eslint-disable */

function calculateSwiperMinHeight() {
    var windowHeight = $(window).outerHeight();
    var footerHeight = $('footer').outerHeight();
    var swiperContainerMarginTop = parseInt($('.swiper-container').css('marginTop'));

    $('.swiper-container').css({ 'min-height': windowHeight - (swiperContainerMarginTop + footerHeight) });
}

$(function () {
    calculateSwiperMinHeight();
    $(window).on('resize', function () {
        calculateSwiperMinHeight();
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
        var $workingTime = $('.working-time');
        var $workingTimeHeading = $('.working-time__heading');
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

        if (dayIndex === dayNow) {
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

            $el.addClass('working-time--current-day');
            var openHour = new Date().setHours(hourFrom, minutesFrom);
            var closeHour = new Date().setHours(hourTo, minutesTo);
            var restFrom = new Date().setHours(restHourFrom, restMinutesFrom);
            var restTo = new Date().setHours(restHourTo, restMinutesTo);
            var openSoon = new Date().setHours(hourFrom - 1, minutesFrom);
            var closeSoon = new Date().setHours(hourTo - 1, minutesTo);

            if (currentDate >= openHour && currentDate < closeHour) { // Store is open
                if (rest && (currentDate >= restFrom && currentDate < restTo)) {
                    $workingTime.addClass('working-time__rest');
                    $workingTimeHeading.append('<div class="working-time--rest">' + status[getLocale].rest + '</div>');
                    isOpen = false;
                } else if (currentDate >= closeSoon && currentDate < closeHour) {
                    $workingTime.addClass('working-time__closes-soon');
                    $workingTimeHeading.append('<div class="working-time--closes-soon">' + status[getLocale].closesSoon + '</div>');
                    isOpen = true;
                } else {
                    $workingTime.addClass('working-time__open');
                    $workingTimeHeading.append('<div class="working-time--open">' + status[getLocale].openNow + '</div>');
                    isOpen = true;
                }
            } else if (currentDate >= openSoon && currentDate < openHour) { // Store will open soon
                $workingTime.addClass('working-time__opens-soon');
                $workingTimeHeading.append('<div class="working-time--opens-soon">' + status[getLocale].opensSoon + '</div>');
                isOpen = false;
            } else { // Store is close
                $workingTime.addClass('working-time__closed');
                $workingTimeHeading.append('<div class="working-time--closed">' + status[getLocale].closedNow + '</div>');
                isOpen = false;
            }
        }
    });

    return isOpen;
})();
