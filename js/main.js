(function($) {
  "use strict";

  // bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() {
      if ($("#loader").length > 0) {
        $("#loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  $("nav .dropdown").hover(
    function() {
      var $this = $(this);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      $this.find(".dropdown-menu").addClass("show");
    },
    function() {
      var $this = $(this);
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      $this.find(".dropdown-menu").removeClass("show");
    }
  );

  var offcanvas_toggle = $(".js-offcanvas-toggle");
  offcanvas_toggle.on("click", function() {
    if ($("body").hasClass("offcanvas-open")) {
      $("body").removeClass("offcanvas-open");
    } else {
      $("body").addClass("offcanvas-open");
    }
  });

  $(document).click(function(e) {
    var container = $(".js-offcanvas-toggle, #offcanvas_menu");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("offcanvas-open")) {
        $("body").removeClass("offcanvas-open");
      }
    }
  });

  $("#date-countdown").countdown("2020/10/10", function(event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
          '<span class="countdown-block"><span class="label">%d</span> days </span>' +
          '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
          '<span class="countdown-block"><span class="label">%M</span> min </span>' +
          '<span class="countdown-block"><span class="label">%S</span> sec</span>'
      )
    );
  });

  // home slider
  $(".home-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: false,
    items: 1,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  // home slider
  $(".testimony-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: false,
    autoplayHoverPause: false,
    items: 1,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false
      }
    }
  });

  // owl carousel
  var majorCarousel = $(".js-carousel-1");
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  // owl carousel
  var major2Carousel = $(".js-carousel-2");
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });

  var contentWayPoint = function() {
    var i = 0;
    $(".element-animate").waypoint(
      function(direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("element-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function() {
            $("body .element-animate.item-animate").each(function(k) {
              var el = $(this);
              setTimeout(function() {
                var effect = el.data("animate-effect");
                if (effect === "fadeIn") {
                  el.addClass("fadeIn element-animated");
                } else if (effect === "fadeInLeft") {
                  el.addClass("fadeInLeft element-animated");
                } else if (effect === "fadeInRight") {
                  el.addClass("fadeInRight element-animated");
                } else {
                  el.addClass("fadeInUp element-animated");
                }
                el.removeClass("item-animate");
              }, k * 100);
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  /* tasks */

  /* Mouse pops up pop1 */

  document.addEventListener("mouseleave", function(event) {
    document.getElementById("popup1").style.visibility = "visible";
  });

  /* You can close the subscribe box if popup1 by referring to the close class. (everything else is blanked out by popup1 so its ok to callout by classname .close.) */

  document.getElementById("popup1").getElementsByClassName;

  /* Hoan's answer to #3 WIP

document.getElementById("subscribe_popup").getEelementsbyClassName('button')[0].addEventlistener("click",function(event) {
  var userInput = "email";
  var validationResult = true;

  if(validationResult === true) {
    document.getElement
  }
}
*/

  /* validate email  */

  function validateEmail() {
    var _email = getEmail();

    if (checkSpace(_email) === true) {
      return false;
    }

    // check for @
    var atSymbol = _email.indexOf("@");
    if (atSymbol < 1) {
      return false;
    }

    // check if there is a dot located less than 2 symbols away from the @ sign
    var dot = _email.indexOf(".");
    if (dot <= atSymbol + 2) {
      return false;
    }

    // check that the dot is not at the end
    if (dot === _email.length - 1) {
      return false;
    }

    return true;
  }

  function getEmail() {
    if (typeof $('[name="email"]').val() === "undefined") {
      return "";
    } else {
      return '[name="email"]'.val();
    }
  }

  /* Jquery stuff */
})(jQuery);
