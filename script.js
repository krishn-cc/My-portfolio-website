$(document).ready(function() {
  $(window).scroll(function() {
    $('.scroll-up-btn').toggleClass('show', this.scrollY > 500);
    $('.navbar').toggleClass('sticky', this.scrollY > 20);
  });

  $('.scroll-up-btn').click(function() {
    $('html').animate({ scrollTop: 0 });
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function() {
    $('html').css("scrollBehavior", "smooth");
  });

  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer", "B.Tech Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

});
