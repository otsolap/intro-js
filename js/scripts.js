(function() {
  var itemClassName = "slider__photo";
  (items = document.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0);

  // Set event listeners
  function setEventListeners() {
    var next = document.getElementsByClassName("slider__button--next")[0],
      prev = document.getElementsByClassName("slider__button--prev")[0];

    next.addEventListener("click", getNext);
    prev.addEventListener("click", getPrev);
  }

  function getNext() {
    $(".slider_photo")
      .eq(slide)
      .removeClass("active");
    $(".slider_photo")
      .eq(0)
      .removeClass("active");

    /* Plain javascript
    document.getElementsByClassName('slider__photo')[slide].classList.remove('active');
    slide = (slide === totalItems - 1) ? 0 : (slide + 1);        document.getElementsByClassName('slider__photo')[slide].classList.add('active');
         */
  }

  function getPrev() {
    document
      .getElementsByClassName("slider__photo")
      [slide].classList.remove("active");

    if (slide === 0) {
      slide = document.getElementsByClassName("slider__photo").length - 1;
    } else {
      slide--;
    }
    document
      .getElementsByClassName("slider__photo")
      [slide].classList.add("active");
  }

  function initSlider() {
    // setInitialClasses();
    setEventListeners();

    // Set moving to false so that the slider becomes interactive
    moving = false;
  }

  initSlider();
})();
