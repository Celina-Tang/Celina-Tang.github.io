function main(){
  introAnimation();
  detailedInfoAnimation();
  imageHoverAnimation();
}

function introAnimation(){
  var $headShot = $('.headShot'),
      $shortWriteUp = $('.shortWriteUp');
  $shortWriteUp.hide();
  $headShot.on('click', function(){
    anime({
      targets: '.headShot',
      translateX: -60,
      translateY: 30,
      scale: 1.25
    });
    $shortWriteUp.fadeIn(4000);
  });
}

function detailedInfoAnimation(){
  var $bathToken = $('.bathToken img');

  $('.hidden-info').hide();
  $bathToken.hover(function(){
    anime({
      targets: this,
      scale: 1.05
    });
  }, function(){
    anime.remove(this);
    anime({
      targets: this,
      scale:1
    });
  });

  $bathToken.on('click', function(){
    console.log($('.hidden-info:visible').length);
    if ($('.hidden-info:visible').length) {
      $('.bathToken').show();
      $('.hidden-info').hide();
    } else {
      $('.bathToken').hide();
      $(this).parent().show();
      $('.hidden-info.' + $(this).parent().attr('id')).show();
      $('.hidden-info.' + $(this).parent().attr('id') + ' nav a').css('width', (($('.hidden-info.' + $(this).parent().attr('id') + ' nav').width() - 4.5) / 2) + 'px');
    }
  });
}

function imageHoverAnimation(){
  var slideIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("imageSlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
      setTimeout(carousel, 3000);
  }
}


$(document).ready(main);
