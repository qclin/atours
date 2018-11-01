$(document).ready(function(){

  $('#cable-cover').load(function(){
    setTimeout(function(){
      var cableH = $('#cable-cover').height();
      $('#cables div.frame').css('height', cableH);
    }, 800);
  });


  var cancellations = ssGCATGImages.filter(img => img.indexOf('CANCEL_FLIGHTS') > -1);
  setInterval(function(){
    var randIndx = Math.floor(Math.random() * cancellations.length);
    //- var randTime = Math.floor(Math.random() *  (3000 - 500)) + 500;
    //- console.log(randTime);
    $('img#cancelled').attr('src', cancellations[randIndx]);
  }, 10000);


  // frames offset
  var stack = $('.cancellation-posters div.frame');
  for(var i = 0; i< stack.length; i++ ){
    $(stack[i]).css({
      'top': `${7*(i+1)}px`,
      'left': `${7*(i+1)}px`,
      'z-index': `-${i}`
    });
  }
});


$(window).resize(function(){
  var rCableH = $('#cable-cover').height();
  $('#cables div.frame').css('height', rCableH);
})
