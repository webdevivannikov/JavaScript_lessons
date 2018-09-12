"use strict";

function pict() {
  //pictures
  var images = document.querySelectorAll('.images'),
      newImage,
      newDiv;

  var _loop = function _loop(i) {
    images[i].addEventListener('click', function (event) {
      event.preventDefault();
      newDiv = document.createElement('div');
      newImage = document.createElement('img');
      newImage.setAttribute('src', "img/our_works/big_img/".concat(i + 1, ".png"));
      newImage.setAttribute('alt', "pict");
      newDiv.className += "popup_image";
      newImage.style.width = "550px";
      newDiv.style.display = "block";
      newImage.className += "popup_image_content";
      document.body.appendChild(newDiv);
      newDiv.appendChild(newImage);
      newDiv.addEventListener('click', function (event) {
        event.preventDefault();
        var target = event.target;

        if (target != newImage) {
          newImage.remove();
          newDiv.remove();
        }
      });
    });
  };

  for (var i = 0; i < images.length; i++) {
    _loop(i);
  }
}

module.exports = pict;