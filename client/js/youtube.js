/* eslint-disable*/

$('.load-videos').on('click', function () {
  $('#loading-screen .spinner-wrapper div').css({ 'box-shadow': '0 4px 0 0 #fff' });
  $('#loading-screen').css({ 'background-color': 'transparent' }).fadeIn('slow');
  var $that = $(this);
  var token = $that.data('token');
  var locale = window.location.pathname.split('/')[1];

  $.ajax({
    type: 'GET',
    url: '/' + locale + '/video/next?nextPageToken=' + token,
    success: function (data) {
      var uploads = data.uploads;
      var $lastSlide = $('.swiper-slide--last');

      $lastSlide.detach();

      uploads.forEach(function (id) {
        // swiper is isntance of Swiper and it is attached to global window object
        swiper.appendSlide('<div class=\'swiper-slide\'><div class=\'youtube\'><iframe src=\'https://www.youtube.com/embed/'.concat(id, '\' allow=\'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen class=\'youtube__player\'></iframe></div></div>'));
      });

      if (data.nextPageToken) {
        swiper.appendSlide($lastSlide);
        $that.data('token', data.nextPageToken);
      } else {
        $lastSlide.detach();
      }

      $('#loading-screen').fadeOut('slow');
    },
  });
});
