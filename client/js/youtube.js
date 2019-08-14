/* eslint-disable*/

$('.load-videos').on('click', function () {
  $('#loading-screen').find($('path').attr('fill', '#fff'));
  $('#loading-screen').css({ 'background-color': 'transparent' }).fadeIn('slow');
  var $that = $(this);
  var token = $that.data('token');

  $.ajax({
    type: 'GET',
    url: `/video/next?nextPageToken=${token}`,
    success: function (data) {
      var uploads = data.uploads;
      var $lastSlide = $('.swiper-slide--last');

      $lastSlide.detach();

      uploads.forEach(function (id) {
        // swiper is isntance of Swiper and it is attached to global window object
        swiper.appendSlide(
          `
          <div class="swiper-slide">
            <div class="youtube">
              <iframe
                src="https://www.youtube.com/embed/${id}"
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                class="youtube__player">
              </iframe>
            </div>
          </div>
        `
        );
      });

      swiper.appendSlide($lastSlide);
      $that.data('token', data.nextPageToken);
      $('#loading-screen').fadeOut('slow');
    },
  });
});
