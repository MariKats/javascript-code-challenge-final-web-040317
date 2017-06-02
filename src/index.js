$(document).ready(function(){
  $('#photo-form').on('submit', function(e){
    e.preventDefault()
    const url = $('#img-input').val
    const caption = $('#caption-input').val
    var newPic = new Image(url, caption)
    $('#photo-list').html(newPic.render())
  })
})
