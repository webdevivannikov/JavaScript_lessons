(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {
	
	let modal = require('../parts/modal.js');
		ajax = require('../parts/ajax.js');
		tab = require('../parts/tab.js');
		calc = require('../parts/calc.js');
		timer = require('../parts/timer.js');
		pict = require('../parts/pict.js');
		minute = require('../parts/minute.js');

	
	modal();
	ajax();
	tab();
	calc();
	timer();
	pict();
	minute();
	
});
},{"../parts/ajax.js":23,"../parts/calc.js":24,"../parts/minute.js":25,"../parts/modal.js":26,"../parts/pict.js":27,"../parts/tab.js":28,"../parts/timer.js":29}],2:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":13}],3:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],4:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],5:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":7}],6:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":9,"./_is-object":13}],7:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],8:[function(require,module,exports){
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":4,"./_fails":7,"./_hide":11,"./_redefine":17,"./_wks":21}],9:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],10:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],11:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":5,"./_object-dp":15,"./_property-desc":16}],12:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":5,"./_dom-create":6,"./_fails":7}],13:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],14:[function(require,module,exports){
module.exports = false;

},{}],15:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":2,"./_descriptors":5,"./_ie8-dom-define":12,"./_to-primitive":19}],16:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],17:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":3,"./_global":9,"./_has":10,"./_hide":11,"./_uid":20}],18:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":3,"./_global":9,"./_library":14}],19:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":13}],20:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],21:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":9,"./_shared":18,"./_uid":20}],22:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":8}],23:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.regexp.replace");

function ajax() {
  //Form
  var message = new Object();
  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с Вами свяжемся";
  message.failure = "Что-то пошло не так...";
  var form = document.getElementsByTagName('form'),
      statusMessage = document.createElement('div'),
      mainList = {};

  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function mask(event) {
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });

    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
  }

  ;

  var _loop = function _loop(i) {
    var input = form[i].getElementsByTagName('input'),
        input_tel = document.getElementsByName("user_phone");
    input_tel[i].addEventListener("input", mask);
    input_tel[i].addEventListener("focus", mask);
    input_tel[i].addEventListener("blur", mask);
    form[i].addEventListener('submit', function (event) {
      form[i].appendChild(statusMessage);
      event.preventDefault(); //AJAX

      var request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      var formData = new FormData(form[i]);
      formData.append('object', mainList);
      request.send(formData);

      for (var key in mainList) {
        delete mainList[key];
      }

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            console.log(form[i]);
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
},{"core-js/modules/es6.regexp.replace":22}],24:[function(require,module,exports){
"use strict";

function calc() {
  //calc
  var popup_calc_btn = document.querySelectorAll('.popup_calc_btn'),
      popup_calc = document.querySelector('.popup_calc'),
      popup_calc_close = document.querySelector('.popup_calc_close'),
      popup_calc_content = document.querySelector('.popup_calc_content'),
      popup_calc_button = document.querySelector('.popup_calc_button'),
      popup_calc_profile = document.querySelector('.popup_calc_profile'),
      popup_calc_profile_content = document.querySelector('.popup_calc_profile_content'),
      popup_calc_profile_button = document.querySelector('.popup_calc_profile_button'),
      popup_calc_profile_close = document.querySelector('.popup_calc_profile_close'),
      popup_calc_end = document.querySelector('.popup_calc_end'),
      popup = document.querySelector('.popup'),
      popup_engineer = document.querySelector('.popup_engineer'),
      popup_calc_end_close = document.querySelector('.popup_calc_end_close'),
      balcon_icons = document.querySelector('.balcon_icons'),
      big_img = document.querySelector('.big_img'),
      mainList = {}; //появляется калькулятор

  for (var i = 0; i < popup_calc_btn.length; i++) {
    popup_calc_btn[i].addEventListener('click', function () {
      popup_calc.style.display = "block";
      document.body.style.overflow = 'hidden';
    });
  } //close


  popup_calc_close.addEventListener('click', function (event) {
    event.preventDefault();
    popup_calc.style.display = "none";
    document.body.style.overflow = '';
  });
  popup_calc_profile_close.addEventListener('click', function (event) {
    popup_calc.style.display = "none";
    popup_calc_profile.style.display = "none";
    document.body.style.overflow = '';
  });
  popup_calc_end_close.addEventListener('click', function (event) {
    popup_calc.style.display = "none";
    popup_calc_profile.style.display = "none";
    popup_calc_end.style.display = "none";
    document.body.style.overflow = '';
  }); //closePopup(popup_calc, popup_calc_content);

  /*	popup_calc_profile.addEventListener('click', (event) => {
  		event.preventDefault();
  		let target = event.target;
  		console.log(target)
  		if (!target.matches popup_calc_profile_content || !popup_calc_profile_content.contains(target) ) {
  		
  			popup_calc_profile.style.display = "none";
  			document.body.style.overflow = '';
  		} 
  
  	});*/

  document.body.addEventListener('click', function (event) {
    var target = event.target;

    if (target.matches('.popup, .popup_calc, .popup_engineer')) {
      popup_calc.style.display = 'none';
      popup.style.display = 'none';
      popup_engineer.style.display = 'none';
    }
  });
  balcon_icons.addEventListener('click', function (event) {
    event.preventDefault();
    var target = event.target;

    switch (target.parentElement.className) {
      case 'type1':
        document.getElementById("type2").style.display = "none";
        document.getElementById("type3").style.display = "none";
        document.getElementById("type4").style.display = "none";
        document.getElementById("type1").style.display = "inline-block";
        mainList.type = 'type1';
        break;

      case 'type2':
        document.getElementById("type1").style.display = "none";
        document.getElementById("type3").style.display = "none";
        document.getElementById("type4").style.display = "none";
        document.getElementById("type2").style.display = "inline-block";
        mainList.type = 'type2';
        break;

      case 'type3':
        document.getElementById("type1").style.display = "none";
        document.getElementById("type2").style.display = "none";
        document.getElementById("type4").style.display = "none";
        document.getElementById("type3").style.display = "inline-block";
        mainList.type = 'type3';
        break;

      case 'type4':
        document.getElementById("type1").style.display = "none";
        document.getElementById("type2").style.display = "none";
        document.getElementById("type3").style.display = "none";
        document.getElementById("type4").style.display = "inline-block";
        mainList.type = 'type4';
        break;

      default:
        break;
    }

    ;
  }); //закрываем окно с шириной и высотой

  popup_calc_button.addEventListener('click', function (event) {
    mainList.width = document.getElementById('width');
    mainList.height = document.getElementById('height');
    popup_calc.style.display = "none";
    popup_calc_profile.style.display = "block";
  });
  var chooseChecked = false;
  popup_calc_profile_content.addEventListener('click', function (event) {
    var i = document.getElementById("view_type").options.selectedIndex;
    mainList.view_type = document.getElementById("view_type").options[i].text;
    var checkbox = document.getElementsByName('checkbox-test');

    for (var _i = 0; _i < checkbox.length; _i++) {
      if (checkbox[_i].checked) {
        mainList.profile = checkbox[_i].value;
        chooseChecked = true;
      } else {
        chooseChecked = false;
      }
    }
  });
  popup_calc_profile_button.addEventListener('click', function (event) {
    if (chooseChecked) {
      popup_calc.style.display = "none";
      popup_calc_profile.style.display = "none";
      popup_calc_end.style.display = "block";
    }
  });
}

module.exports = calc;
},{}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
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
          newImage.parentNode.removeChild(newImage);
          newDiv.parentNode.removeChild(newDiv);
        }
      });
    });
  };

  for (var i = 0; i < images.length; i++) {
    _loop(i);
  }
}

module.exports = pict;
},{}],28:[function(require,module,exports){
"use strict";

function tab() {
  //tab
  var glazing_block = document.querySelectorAll('.glazing_block'),
      stuff = document.querySelectorAll('.stuff');

  function hideTabContent(obj, className, elem, index) {
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].childNodes[index].classList.contains(className)) {
        obj[i].childNodes[index].classList.remove(className);
        elem[i].style.display = "none";
      }
    }

    ;
  }

  ;

  function showTabContent(a, i, className, arrayStyle, obj) {
    hideTabContent(obj, className, arrayStyle, i);
    arrayStyle[a].style.display = "block";
    obj[a].childNodes[i].classList.add(className);
  }

  ;

  var _loop = function _loop(i) {
    glazing_block[i].addEventListener('click', function (event) {
      var target = event.target;

      if (target.parentNode.childNodes[3].classList.contains(glazing_block[i].childNodes[3].classList)) {
        showTabContent(i, 3, 'active', stuff, glazing_block);
      }
    });
  };

  for (var i = 0; i < glazing_block.length; i++) {
    _loop(i);
  }

  ;
  var decoration_item = document.querySelectorAll('.decoration_item'),
      decor = document.querySelectorAll('.decor');

  var _loop2 = function _loop2(i) {
    decoration_item[i].addEventListener('click', function (event) {
      var target = event.target;

      if ((target.classList.contains("no_click") || target.parentNode.classList.contains("no_click")) == decoration_item[i].childNodes[1].classList.contains("no_click")) {
        showTabContent(i, 1, 'after_click', decor, decoration_item);
      }
    });
  };

  for (var i = 0; i < decoration_item.length; i++) {
    _loop2(i);
  }

  ;
}

module.exports = tab;
},{}],29:[function(require,module,exports){
"use strict";

function timer() {
  //timer
  var deadline = '2019-07-04';

  function getTimeRemaining(endtime) {
    if (Date.parse(endtime) >= Date.parse(new Date())) {
      var t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor(t / 1000 % 60),
          minutes = Math.floor(t / 1000 / 60 % 60),
          hours = Math.floor(t / 1000 / 60 / 60 % 24),
          days = Math.floor(t / 1000 / 60 / 60 / 24);
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    } else {
      return {
        'total': 0,
        'days': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0
      };
    }
  }

  ;

  function addZero(number) {
    var a;

    if (number < 10) {
      a = '0' + number;
    } else {
      a = number;
    }

    return a;
  }

  function setClock(id, endtime) {
    var timer = document.querySelector(id),
        days_first = timer.querySelector('.days_first'),
        days_second = timer.querySelector('.days_second'),
        days_third = timer.querySelector('.days_third'),
        hours_first = timer.querySelector('.hours_first'),
        hours_second = timer.querySelector('.hours_second'),
        minutes_first = timer.querySelector('.minutes_first'),
        minutes_second = timer.querySelector('.minutes_second'),
        seconds_first = timer.querySelector('.seconds_first'),
        seconds_second = timer.querySelector('.seconds_second'),
        timeInterval;

    function updateClock() {
      var t = getTimeRemaining(endtime);

      if (t.days > 99) {
        days_first.innerHTML = String(addZero(t.days))[0];
        days_second.innerHTML = String(addZero(t.days))[1];
        days_third.innerHTML = String(addZero(t.days))[2];
      } else {
        days_second.innerHTML = String(addZero(t.days))[0];
        days_third.innerHTML = String(addZero(t.days))[1];
      }

      hours_first.innerHTML = String(addZero(t.hours))[0];
      hours_second.innerHTML = String(addZero(t.hours))[1];
      minutes_first.innerHTML = String(addZero(t.minutes))[0];
      minutes_second.innerHTML = String(addZero(t.minutes))[1];
      seconds_first.innerHTML = String(addZero(t.seconds))[0];
      seconds_second.innerHTML = String(addZero(t.seconds))[1];

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    ;
    updateClock();
    timeInterval = setInterval(updateClock, 1000);
  }

  ;
  setClock('.eTimer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
