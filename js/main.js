$( document ).ready(function(){

  var animateCounter = function(){
    if($('.odometer').visible()){
      $(".odometer").each(function(){
        var value = $( this ).data('count');
        $( this ).html(value);
      })
    }
  };

  var smoothScroll = function(){
    $.scrollify({
      section : ".scrollify",
      sectionName : "section-name",
      easing: "easeOutExpo",
      setHeights: false,
      updateHash: false,
      scrollSpeed: 1000,
      offset : 0,
      overflowScroll: true,
      before:function() {},
      after:function() {}
    });
  };

  var activateSlider = function(){
    if( window.matchMedia('(max-width: 600px)' ).matches){
      $('.team').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        responsive: [{
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    }
  };

  var typingAnimation = function(){
    var e = ["crea", 300, "tive", 1500, !1, "driven", 800, !1, "modern", 200, 800, !1, "pass", 500, "ionate"],
      a = $(".header-typed-el").typeIt({
        speed: 250,
        autoStart: !1,
        loop: !0
        });
    for (var t in e) "string" == typeof e[t] ? a = a.tiType(e[t]) : !1 === e[t] ? a = a.tiDelete() : Number.isInteger(e[t]) && (a = e[t] > 0 ? a.tiPause(e[t]) : a.tiDelete(-e[t]))
  };

  typingAnimation();
  animateCounter();
  activateSlider();
  smoothScroll();

  $( window ).scroll(function() {
    animateCounter();
  });
  $( window ).resize(function(){
    activateSlider();
  });

  $('.mobile-nav-icon').on('click', function(){
    $( this ).toggleClass('mobile-nav-icon_close');
    $('.header-nav').toggleClass('header-nav-mobile_active');
  });

  $('.header-scroll-arrow').on('click', function(){
    $.scrollify.next();
  })

});
