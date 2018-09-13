"use strict";

function minute() {
  //modal 60
  var popup = document.querySelector('.popup');
  setTimeout(function () {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }, 60000);
}

module.exports = minute;