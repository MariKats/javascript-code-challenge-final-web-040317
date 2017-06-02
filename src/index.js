$(document).ready(function(){
  $('#submit').on('click', function(e){
    e.preventDefault();
    var picture = $('#img').val
    var caption = $('#caption').val
    $('#photo-list').html(`<img src="${picture}" caption="${caption}"/>`)
  })
})
