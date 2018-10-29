(function scatterPlot(){
  var images = $('#scatterPlot img');
  var bodyWidth = $(document).width();
  var bodyHeight = $(document).height();

    for(var i=0;  i < images.length; i++){
      var randPosX = Math.floor((Math.random()*bodyWidth));
      var randPosY = Math.floor((Math.random()*bodyHeight));
      $(images[i]).css({ 'left': randPosX, 'top': randPosY } );
    }
})();


$(document).ready(function(){
  $('#backDrop').height($(document).height());
});
