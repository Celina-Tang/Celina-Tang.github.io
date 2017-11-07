(function() {

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        canvas = document.getElementById('canvas');
        canvas.width = width;
        canvas.height = height/1.52;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*30, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(35,100,148,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})();

//
// function main(){
//   introAnimation();
//   detailedInfoAnimation();
//   imageHoverAnimation();
// }
//
// function introAnimation(){
//   var $headShot = $('.headShot'),
//       $shortWriteUp = $('.shortWriteUp');
//   $shortWriteUp.hide();
//   $headShot.on('click', function(){
//     anime({
//       targets: '.headShot',
//       translateX: -60,
//       translateY: 30,
//       scale: 1.25
//     });
//     $shortWriteUp.fadeIn(4000);
//   });
// }
//
// function detailedInfoAnimation(){
//   var $bathToken = $('.bathToken img');
//
//   $('.hidden-info').hide();
//   $bathToken.hover(function(){
//     anime({
//       targets: this,
//       scale: 1.05
//     });
//   }, function(){
//     anime.remove(this);
//     anime({
//       targets: this,
//       scale:1
//     });
//   });
//
//   $bathToken.on('click', function(){
//     console.log($('.hidden-info:visible').length);
//     if ($('.hidden-info:visible').length) {
//       $('.bathToken').show();
//       $('.hidden-info').hide();
//     } else {
//       $('.bathToken').hide();
//       $(this).parent().show();
//       $('.hidden-info.' + $(this).parent().attr('id')).show();
//       $('.hidden-info.' + $(this).parent().attr('id') + ' nav a').css('width', (($('.hidden-info.' + $(this).parent().attr('id') + ' nav').width() - 4.5) / 2) + 'px');
//     }
//   });
// }
//
// function imageHoverAnimation(){
//   var slideIndex = 0;
//   carousel();
//
//   function carousel() {
//       var i;
//       var x = document.getElementsByClassName("imageSlides");
//       for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//       }
//       slideIndex++;
//       if (slideIndex > x.length) {slideIndex = 1}
//       x[slideIndex-1].style.display = "block";
//       setTimeout(carousel, 3000);
//   }
// }
//
//
// $(document).ready(main);
