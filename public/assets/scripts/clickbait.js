(function makeDiv(){
    // vary size for fun
    var divsize = ((Math.random()*300) + 50).toFixed();
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    var promoText = ["click here for new offer", "European Art Tour", "GROUP PASS DEALS"];

    var classes = ["bar", "round", "box"];
    var selectedClass = classes[Math.floor(Math.random() * classes.length)];
    $newdiv = $('<marquee direction="down" behavior="alternate"/>').addClass(selectedClass);

    var selectedText = promoText[Math.floor(Math.random() * promoText.length)];
    $newdiv.html(`<span> ${selectedText} </span>`);
    $newdiv.addClass('clickbait');
    // make position sensitive to size and document's width
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(1000).delay(3000).fadeOut(500, function(){
      $(this).remove();
      makeDiv();
    });
})();

var iconFiles = [
  "public/assets/icons/AHA-Soft/Air-tickets-icon.png",
  "public/assets/icons/AHA-Soft/Calendar-disabled-icon.png",
  "public/assets/icons/AHA-Soft/Calendar-icon.png",
  "public/assets/icons/AHA-Soft/CCTV-Camera-icon.png",
  "public/assets/icons/AHA-Soft/Clock-disabled-icon.png",
  "public/assets/icons/AHA-Soft/Clock-icon.png",
  "public/assets/icons/AHA-Soft/Compass-icon.png",
  "public/assets/icons/AHA-Soft/Global-Network-icon.png",
  "public/assets/icons/AHA-Soft/Place-selection-icon.png",
  "public/assets/icons/AHA-Soft/Satellite-icon.png",
  "public/assets/icons/AHA-Soft/Time-Zones-disabled-icon.png",
  "public/assets/icons/AHA-Soft/Time-Zones-icon.png"
];
