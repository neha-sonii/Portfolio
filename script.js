$('.left-slide').animate({ left: '0px', opacity: 1 }, 500);
$('.right-slide').animate({ right: '0px', opacity: 1 }, 500);

$(".slideUp").animate({top: '0px', opacity: 1}, 600)

$(document).ready(function () {
  $(window).on("scroll", function () {
    $(".section").each(function () {
      let sectionTop = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).height();

      // when section enters viewport
      if (windowBottom > sectionTop + 100) {
        $(this).addClass("show");
      }
    });
  });
});