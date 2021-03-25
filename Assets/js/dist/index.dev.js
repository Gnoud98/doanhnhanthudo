"use strict";

var btn = $("#backTop");
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: 0
  }, "300");
});
stuckHeader();
$(".search-btn").click(function () {
  $(".search-form-mb").addClass("open");
});
$(".close-search-btn").click(function () {
  $(".search-form-mb").removeClass("open");
});

(function ($) {
  window.onload = function () {
    $(document).ready(function () {
      menuMobile();
      headerMbsticky();
    });
  };
})(jQuery);

function menuMobile() {
  if ($(".header__bars").length || $(".menu-mobile").length || $(".overlay").length) {
    $(".header__bars").click(function () {
      $(".overlay").addClass("overlay-active");
      $(".menu-mobile").addClass("menu-mobile-active");
    });
    $(".overlay").click(function () {
      $(".overlay").removeClass("overlay-active");
      $(".menu-mobile").removeClass("menu-mobile-active");
      $(".box-search_header").removeClass("active");
    });
    $(".menu-mobile-close").click(function () {
      $(".overlay").removeClass("overlay-active");
      $(".menu-mobile").removeClass("menu-mobile-active");
    });
  }

  $(".menu-mobile ul li.menu-item-has-children>ul").before("<span class=\"li-plus\"></span>");
  $(".menu-mobile ul li.current-menu-parent.menu-item-has-children .li-plus").addClass("clicked");

  if ($(".li-plus").length) {
    $(".li-plus").click(function (e) {
      if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked").next("ul").slideUp(500);
      } else if ($(this).parents().siblings("a").hasClass("clicked")) {
        $(".clicked").slideDown();
        $(this).addClass("clicked").next("ul").slideDown(500);
      } else {
        $("#nav li a").removeClass("clicked").next("ul").slideUp(500);
        $(this).addClass("clicked").next("ul").slideDown(500);
      }
    });
  }
}

function headerMbsticky() {
  var header__bottom = document.querySelector(".header__mobile");

  if (header__bottom == null) {
    return 0;
  } else {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        header__bottom.classList.add("header-mb-active");
      } else {
        header__bottom.classList.remove("header-mb-active");
      }
    });
  }
}

function stuckHeader() {
  var header__bottom = document.querySelector(".header__sticky");

  if (header__bottom == null) {
    return 0;
  } else {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        header__bottom.classList.add("header-active");
      } else {
        header__bottom.classList.remove("header-active");
      }
    });
  }
}