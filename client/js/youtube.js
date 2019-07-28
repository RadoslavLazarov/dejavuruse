/* eslint-disable*/
$.ajax({
  type: 'GET',
  url: '/video/uploads',
  success: function (data) {
    // console.log(data.uploads);
    var uploads = data.uploads;
    $('.batka').empty();
    uploads.forEach(function (el) {
      console.log(el);
      $('.batka').prepend(`
        <div class="col-xl-6 d-flex justify-content-center pb-5">
          <iframe width="560" 
            height="315" 
            src="https://www.youtube.com/embed/${el}"
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            class='youtube-player'>
          </iframe>
        </div>
      `);

      // $('.batka').prepend(`<div>${el}</div>`);
    });
    // $('.youtube-player').attr('src', 'https://www.youtube.com/embed/UOyJwOoi1VE')
  },
});

$('#uploads').on('click', function (e) {
  e.preventDefault();
  $.ajax({
    type: 'GET',
    url: '/video/uploads',
    success: function (data) {
      // console.log(data.uploads);
      var uploads = data.uploads;
      $('.batka').empty();
      uploads.forEach(function (el) {
        console.log(el);
        $('.batka').prepend(`
          <div class="col-xl-6 d-flex justify-content-center pb-5">
            <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/${el}"
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              class='youtube-player'>
            </iframe>
          </div>
        `);

        // $('.batka').prepend(`<div>${el}</div>`);
      });
      // $('.youtube-player').attr('src', 'https://www.youtube.com/embed/UOyJwOoi1VE')
    },
  });
});
