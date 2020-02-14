/*
var HOURHAND = document.querySelector("#hour");
var MINUTEHAND = document.querySelector("#minute");
var SECONDHAND = document.querySelector("#second");

function run_the_clock() {
  var now = new Date();
  var hr = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  var deltaHr = hr * 360 / 12 + min / 60 * 360 / 12; <-- tutki tätä.
  var deltaMin = (min * 360) / 60 + (sec * 360) / 60 / 60;
  var deltaSec = (sec * 360) / 60 + ;

  HOURHAND.style.transform = "rotate(" + deltaHr + "deg)";
  MINUTEHAND.style.transform = "rotate(" + deltaMin + "deg)";
  SECONDHAND.style.transform = "rotate(" + deltaSec + "deg)";
}

var interval = setInterval(run_the_clock, 1000);

*/

function moveArms() {
  var now = new Date(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hr = now.getHours(),
    tick = 360 / 60;

  var secondArmPosition = tick * sec,
    minuteArmPosition = tick * min + (sec / 60) * tick,
    hourArmPosition = tick * 5 * hr + (min / 60) * tick * 5;

  var HOURHAND = document.querySelector("#hour"),
    MINUTEHAND = document.querySelector("#minute"),
    SECONDHAND = document.querySelector("#second");

  function update() {
    secondArmPosition += tick;
    minuteArmPosition += tick / 60;
    hourArmPosition += tick / 60 / 60;

    SECONDHAND.style.transform = "rotate(" + secondArmPosition + "deg)";
    HOURHAND.style.transform = "rotate(" + hourArmPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minuteArmPosition + "deg)";
  }

  update();
  setInterval(update, 1000);
}

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(moveArms);
