/* eslint-disable */
window.AOS = require('aos');

// if (window.matchMedia('(min-width: 576px)').matches) {
$('.fade-animation:nth-child(odd)').find('.fade-animation-element').attr({
    'data-aos': 'fade-right',
});
$('.fade-animation:nth-child(even)').find('.fade-animation-element').attr({
    'data-aos': 'fade-left',
});
// }

$(function () {
    AOS.init();
});
