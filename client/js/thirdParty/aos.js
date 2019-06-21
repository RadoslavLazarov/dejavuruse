/* eslint-disable */
window.AOS = require('aos');

if (window.matchMedia('(min-width: 1201px)').matches) {
    $('.album-wrapper:nth-child(1), .album-wrapper:nth-child(3n)').attr({
        'data-aos': 'fade-right',

    });
    $('.album-wrapper:nth-child(2), .album-wrapper:nth-child(2n)').attr({
        'data-aos': 'fade-left',

    });
} else if (window.matchMedia('(max-width: 1200px)').matches) {
    $('.album-wrapper').attr({
        'data-aos': 'fade-up',

    });
}
