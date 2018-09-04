"use strict";

function modal() {
  var _this = this;

  //Modal
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      infoTab = document.querySelectorAll('.info-tabcontent');
  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  for (var i = 0; i < infoTab.length; i++) {
    infoTab[i].addEventListener('click', function (event) {
      var target = event.target;

      if (target.className == 'description-btn') {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }

      ;
    });
  }

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    _this.document.body.style.overflow = '';
  });
}

module.exports = modal;