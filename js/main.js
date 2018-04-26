$(document).ready(function(){

  $(function() {
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
  });

  var e = ["crea", 300, "tive", 1500, !1, "driven", 800, !1, "modern", 200, 800, !1, "pass", 500, "ionate"],
    a = $(".header-typed-el").typeIt({
      speed: 250,
      autoStart: !1,
      loop: !0
      });
  for (var t in e) "string" == typeof e[t] ? a = a.tiType(e[t]) : !1 === e[t] ? a = a.tiDelete() : Number.isInteger(e[t]) && (a = e[t] > 0 ? a.tiPause(e[t]) : a.tiDelete(-e[t]))
  $('.mobile-nav-icon').on('click', function(){
    $(this).toggleClass('mobile-nav-icon_close');
    $('.header-nav').toggleClass('header-nav-mobile_active');
  });

  var animateCounter = function(){
    if($('.odometer').visible()){
      $(".odometer").each(function(){
        var value = $(this).data('count');
        $(this).html(value);
      })
    }
  };

  animateCounter();

  $( window ).scroll(function() {
    animateCounter();
  });

});
