(function makeDiv(){
    // vary size for fun
    var divsize = ((Math.random()*300) + 50).toFixed();
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    var promoText = [ "BIENNALES- SAVE UP TO 10% \n\r TRIENNALES SAVE UP TO 15% \n\r FESTIVALS DISCOUNTS 5%",];

    var classes = [  ];

    var fishes = [
      { text: "Click Here for New Offer",
        style: "bar",
        stamp: "/images/stamps/stargalaxy.gif"
      }, {
        text:  "HOTEL & CAR PACKAGES",
        style: "bar",
      }, {
        style: "round",
        stamp: "/images/stamps/image-non.jpg"
      }, {
        text: "BIENNALES- SAVE UP TO 10% \n\r TRIENNALES SAVE UP TO 15% \n\r FESTIVALS DISCOUNTS 5%",
        style: "box",
        stamp: "/images/stamps/3dred.png"
      }, {
        text: "VENICE BIENNALE TICKETS \n\r YOKOHAMA TRIENNALE PASSES \n\r SAO PAOLO FLIGHTS",
        style: "box",
        stamp: "/images/stamps/3dyellow.png"
      },
    ]
    var selectedFish = fishes[Math.floor(Math.random() * fishes.length)];
    $newdiv = $('<marquee direction="down" behavior="alternate"/>').addClass(selectedFish.style);
    if(!selectedFish.stamp){
      $newdiv.html(`<div> ${selectedFish.text} </div>`);
    }else if(!selectedFish.text){
      $newdiv.html(`<img src=${selectedFish.stamp} />`);
    }else{
      $newdiv.html(`<div> ${selectedFish.text} </div>  <img class="pointer" src=${selectedFish.stamp} />`);
    }

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

$(document).ready(function(){
  var domTrainVideo = $('#train-video video')[0];
  $('#retroPlay').click(function(){
      if(domTrainVideo.paused){
        domTrainVideo.play();
      }else{
        domTrainVideo.pause();
      }
  });



});
