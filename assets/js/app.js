//Scroll Init
$('.page-scroll').on('click', function (e) {
    e.preventDefault();
    var $anchor = $(this);
    var id = $anchor[0].hash;
    $('html, body').stop().animate({ scrollTop: $(id).offset().top }, 1500, 'easeInOutExpo');
});