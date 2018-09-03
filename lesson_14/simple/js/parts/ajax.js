"use strict";

function ajax() {
  //Form
  var message = new Object();
  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с Вами свяжемся";
  message.failure = "Что-то пошло не так...";
  var form = document.getElementsByTagName('form'),
      statusMessage = document.createElement('div');

  var _loop = function _loop(i) {
    var input = form[i].getElementsByTagName('input');
    form[i].addEventListener('submit', function (event) {
      form[i].appendChild(statusMessage);
      event.preventDefault(); //AJAX

      var request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      var formData = new FormData(form[i]);
      request.send(formData);

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            statusMessage.innerHTML = message.success;
          } else {
            statusMessage.innerHTML = message.failure;
          }
        }
      };

      for (var _i = 0; _i < input.length; _i++) {
        input[_i].value = '';
      }
    });
  };

  for (var i = 0; i < form.length; i++) {
    _loop(i);
  }

  ;
}

module.exports = ajax;