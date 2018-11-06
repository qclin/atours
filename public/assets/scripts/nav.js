$(document).ready( function(){
  var link = location.hash
  var subTabs = ['#home', '#destinations', '#offers', '#services', '#privacy', '#about'];

  if(location.pathname == '/'){
    setTimeout(function(){
        if(subTabs.indexOf(link) > -1){
          $(`[data-value=${link.substring(1)}]`).eq(0)[0].click();

        }else{
          setTimeout(openTab, 1000);
        }
      }, 1000);
  }



// // Logo transition
// if($(window).width() < 769){
//     $("h1.flat-link.logo a").animate({'opacity': 0}, 1000,function() {
//       $(this).text("GCATG");
//   }).animate({'opacity': 1}, 30);
// }

  $('.tablink').click(function(){

    // debugger;
    $('.tabcontent').hide();
    $('.tab-container').removeClass('open');
    $(this).parent('.tab-container').addClass('open');

    var pageName = this.dataset.value
    var leavePage = window.location.hash.substring(1)
    if(leavePage.length == 0){
        leavePage = 'home'
    }
    $('body').removeClass(`${leavePage}Page`);
    $('body').addClass(`${pageName}Page`);
    var validPages = ['home', 'about'];

    if(validPages.indexOf(pageName) < 0){
      $('body').addClass("error404");
    }else{
      $('body').removeClass("error404");
    }
    if(location.pathname != '/'){
      window.location = `/#${pageName}`
    }
    $(`#${pageName}-page`).show();

    // if($(window).width() < 769){
    //   $(window).scrollTop(0);
    // }

    if(pageName == 'privacy'){
      $('#radar')[0].src = "http://www.flightradar24.com/simple_index.php?lat=50.8503&lon=4.3517&z=8"
    }
  });

  $('body').on('click', '.open-popup', function () {
      toggleNav();
    });

  $('#stickySide a').click(function(){
    $('.highlight').removeClass('highlight')
    $(this).addClass('highlight')
  });

  $('nav .tab-container span').click(function(){
    $('#pageLeaf').addClass('slide-start')
    setTimeout(function(){
      $('#pageLeaf').removeClass('slide-start')
      $('#pageLeaf').addClass('slide-finish')
    }, 3000)
  });


});


function openTab(){
    $("#defaultOpen").click();
}
