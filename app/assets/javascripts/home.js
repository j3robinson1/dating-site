jQuery(document).ready(function() {
  $('.navslide').on('click', function() {
    e.preventDefault();
    console.log('event fired');
    $('.navbar').css('width', '100%')
  });
  $('.close').on('click', function(){
    $('.navbar').css('width', '0')
  })
});