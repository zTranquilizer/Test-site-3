function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
$;
$(document).ready(function () {
  $(".slider").slick({
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1154,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".slider").slick("setPosition");
});

$(".tabs-latest__link").click(function (event) {
  let filter = $(this).data("filter");
  if (filter == 1) {
    $(".tabs-latest__item").show();
  } else {
    $(".tabs-latest__item").hide();
    $(".tabs-latest__item.f-" + filter).show();
  }
  $(".tabs-latest__link").removeClass("active-tab");
  $(this).addClass("active-tab");

  console.log(filter);
  return false;
});
$(document).ready(function () {
  $(".slider-text ").slick({
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    waitForAnimate: false,
  });
  $(".slider").slick("setPosition");
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $(".header").addClass("fixed-header");
    $(".full-main__body").addClass("margin");
  } else {
    $(".header").removeClass("fixed-header");
    $(".full-main__body").removeClass("margin");
  }
});
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu, .header__logo").toggleClass(
      "active-menu"
    );
    $("body").toggleClass("lock");
  });
});
