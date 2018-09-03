"use strict";

function calc() {
  //calc
  var persons = document.getElementsByClassName('counter-block-input')[0],
      restDays = document.getElementsByClassName('counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0,
      koef = 1;
  totalValue.innerHTML = 0;

  persons.onkeydown = function (event) {
    var chr = event.which;

    if (chr == 191 || chr == 187 || chr == 231 || chr == 190 || chr == 188 || chr == 110) {
      return false;
    }

    ;
  };

  restDays.onkeydown = function (event) {
    var chr = event.which;

    if (chr == 191 || chr == 187 || chr == 231 || chr == 190 || chr == 188 || chr == 110) {
      return false;
    }

    ;
  };

  persons.addEventListener('change', function () {
    if (this.value == '' || this.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      personsSum = +this.value;
      daysSum = +restDays.value;
      koef = place.options[place.selectedIndex].value;
      total = (daysSum + personsSum) * 4000 * koef;

      if (restDays.value == '' || restDays.value == '0') {
        totalValue.innerHTML = 0;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  restDays.addEventListener('change', function () {
    if (this.value == '' || this.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      daysSum = +this.value;
      personsSum = +persons.value;
      koef = place.options[place.selectedIndex].value;
      total = (daysSum + personsSum) * 4000 * koef;

      if (persons.value == '' || persons.value == '0') {
        totalValue.innerHTML = 0;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  place.addEventListener('change', function () {
    daysSum = +restDays.value;
    personsSum = +persons.value;
    koef = 1;
    koef = this.options[this.selectedIndex].value;

    if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      total = (daysSum + personsSum) * 4000 * koef;
      var a = total;
      totalValue.innerHTML = a;
    }
  });
}

module.exports = calc;