/* eslint-disable */
window.AOS = require('aos');

if (window.matchMedia('(min-width: 576px)').matches) {
    $('.album-wrapper:nth-child(odd)').attr({
        'data-aos': 'fade-right',
    });
    $('.album-wrapper:nth-child(even)').attr({
        'data-aos': 'fade-left',
    });
} 
