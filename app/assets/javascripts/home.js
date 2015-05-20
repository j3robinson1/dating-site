jQuery(document).ready(function() {
  $('.navslide').on('click', function() {
    console.log('event fired');
    $('.navbar').css('width', '100%')
  });
  $('.close').on('click', function(){
    $('.navbar').css('width', '0')
  })
});