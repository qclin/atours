$(document).ready(function(){
  var modal = $('#news-modal')

  $('.breaking-news').click(function(){
    $('#news-modal').show();
    $('.blurBack').show();
    $('body').addClass('modal-open');
  });

  $('span.close').click(function(){
    $('#news-modal').hide();
    $('.blurBack').hide();
    $('body').removeClass('modal-open');
  });

  $('.blurBack').click(function(){
    $('#news-modal').hide();
    $('.blurBack').hide();
    $('body').removeClass('modal-open');
  });

  $(window).click(function(e){
    if(e.target ==  $('#news-modal')[0]){
      $('#news-modal').hide();
      $('.blurBack').hide();
      $('body').removeClass('modal-open');
    }
  })
})
