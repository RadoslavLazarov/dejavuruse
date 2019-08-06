/* eslint-disable*/

// if ($videos) {
//   console.log('batkata');
//   $.ajax({
//     type: 'GET',
//     url: '/video/uploads',
//     success: function (data) {
//       // console.log(data.uploads);
//       var uploads = data;
//       $('.batka').empty();
//       uploads.forEach(function (el) {
//         console.log(el);
//         // $('.batka').prepend(`
//         //   <div class="col-xl-6 d-flex justify-content-center pb-5">
//         //     <iframe width="560" 
//         //       height="315" 
//         //       src="https://www.youtube.com/embed/${el}"
//         //       frameborder="0" 
//         //       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
//         //       allowfullscreen
//         //       class='youtube-player'>
//         //     </iframe>
//         //   </div>
//         // `);
//         $('.batka').prepend(`<div>${el}</div>`);
//         // $('.batka').prepend(`<div>${el}</div>`);
//       });
//       // $('.youtube-player').attr('src', 'https://www.youtube.com/embed/UOyJwOoi1VE')
//     },
//   });
// }
// var appendNumber = 4;
// var prependNumber = 1;
// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   centeredSlides: true,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

var $videos = $('.swiper-wrapper');
$('.uploads-container').on('click', function (e) {
  $('#loading-screen').find($('path').attr('fill', '#fff'));
  $('#loading-screen').css({ 'background-color': 'transparent' }).fadeIn('slow');
  var token = $(this);
  $.ajax({
    type: 'GET',
    url: `/video/next?nextPageToken=${$(this).data('token')}`,
    success: function (data) {
      var append = $('.append-buttons');
      append.detach();
      var uploads = data.uploads;

      uploads.forEach(function (id) {
        console.log(id);
        swiper.appendSlide(
          `
          <div class="col-7 p-0 swiper-slide">
            <div class="d-flex justify-content-center youtube-container">
              <div class="col-xl-12 batka">
                <iframe
                  src="https://www.youtube.com/embed/${id}"
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  class="youtube-player">
                </iframe>
              </div>
            </div>
          </div>
        `
        );
      });
      swiper.appendSlide(append);
      console.log(data.nextPageToken);
      token.data('token', data.nextPageToken);
      $('#loading-screen').fadeOut('slow');
    },
  });
});
