// var x, y, x1, y1, rx, ry, rx1, ry1 = 0;

$(document).ready(function() {

var posters = $('#destination-posters .poster');

var interval = 0;
  function animate() {
    for (var i = 0; i < posters.length; i++) {
      var x = (Math.random() * i * 300) + (30*i);
      var y = 20*i;
      var x1 = x + 10;
      var y1 = y + 5;
      if (i % 2 === 0) {
        posters[i].style.transform = "translate(" + x + "px," + y + "px)";
      } else if (i % 3 === 0) {
        posters[i].style.transform = "translate(" + x1 + "px," + y1 + "px)";
      } else {
        posters[i].style.transform = "translate(" + x + "px," + y1 + "px)";
      }
      posters[i].style.zIndex = i*2;
    }
    interval++;
    // requestAnimationFrame(animate); // TURN on for frame changes
  }

  animate();

});
