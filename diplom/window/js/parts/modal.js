"use strict";

function modal() {
  //modal
  var header_btn = document.getElementsByClassName('header_btn')[0],
      popup_engineer = document.querySelector('.popup_engineer'),
      popup_close = document.querySelectorAll('.popup_close'),
      phone_link = document.querySelectorAll('.phone_link'),
      popup = document.querySelector('.popup'),
      popup_form = document.querySelectorAll('.popup_form');
  header_btn.addEventListener('click', function (event) {
    event.preventDefault();
    popup_engineer.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  for (var i = 0; i < popup_close.length; i++) {
    popup_close[i].addEventListener('click', function (event) {
      event.preventDefault();
      popup_engineer.style.display = 'none';
      popup.style.display = 'none';
      document.body.style.overflow = '';
    });
    phone_link[i].addEventListener('click', function (event) {
      event.preventDefault();
      var target = event.target;

      if (target.className == 'phone_link') {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }

      ;
    });
  }
}

module.exports = modal;