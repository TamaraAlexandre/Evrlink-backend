"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/minimalistic-crypto-utils";
exports.ids = ["vendor-chunks/minimalistic-crypto-utils"];
exports.modules = {

/***/ "(rsc)/./node_modules/minimalistic-crypto-utils/lib/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/minimalistic-crypto-utils/lib/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nvar utils = exports;\n\nfunction toArray(msg, enc) {\n  if (Array.isArray(msg))\n    return msg.slice();\n  if (!msg)\n    return [];\n  var res = [];\n  if (typeof msg !== 'string') {\n    for (var i = 0; i < msg.length; i++)\n      res[i] = msg[i] | 0;\n    return res;\n  }\n  if (enc === 'hex') {\n    msg = msg.replace(/[^a-z0-9]+/ig, '');\n    if (msg.length % 2 !== 0)\n      msg = '0' + msg;\n    for (var i = 0; i < msg.length; i += 2)\n      res.push(parseInt(msg[i] + msg[i + 1], 16));\n  } else {\n    for (var i = 0; i < msg.length; i++) {\n      var c = msg.charCodeAt(i);\n      var hi = c >> 8;\n      var lo = c & 0xff;\n      if (hi)\n        res.push(hi, lo);\n      else\n        res.push(lo);\n    }\n  }\n  return res;\n}\nutils.toArray = toArray;\n\nfunction zero2(word) {\n  if (word.length === 1)\n    return '0' + word;\n  else\n    return word;\n}\nutils.zero2 = zero2;\n\nfunction toHex(msg) {\n  var res = '';\n  for (var i = 0; i < msg.length; i++)\n    res += zero2(msg[i].toString(16));\n  return res;\n}\nutils.toHex = toHex;\n\nutils.encode = function encode(arr, enc) {\n  if (enc === 'hex')\n    return toHex(arr);\n  else\n    return arr;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWluaW1hbGlzdGljLWNyeXB0by11dGlscy9saWIvdXRpbHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBLElBQUk7QUFDSixvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldnJsaW5rLWNoYXRib3QvLi9ub2RlX21vZHVsZXMvbWluaW1hbGlzdGljLWNyeXB0by11dGlscy9saWIvdXRpbHMuanM/NzhhNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IGV4cG9ydHM7XG5cbmZ1bmN0aW9uIHRvQXJyYXkobXNnLCBlbmMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkobXNnKSlcbiAgICByZXR1cm4gbXNnLnNsaWNlKCk7XG4gIGlmICghbXNnKVxuICAgIHJldHVybiBbXTtcbiAgdmFyIHJlcyA9IFtdO1xuICBpZiAodHlwZW9mIG1zZyAhPT0gJ3N0cmluZycpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkrKylcbiAgICAgIHJlc1tpXSA9IG1zZ1tpXSB8IDA7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBpZiAoZW5jID09PSAnaGV4Jykge1xuICAgIG1zZyA9IG1zZy5yZXBsYWNlKC9bXmEtejAtOV0rL2lnLCAnJyk7XG4gICAgaWYgKG1zZy5sZW5ndGggJSAyICE9PSAwKVxuICAgICAgbXNnID0gJzAnICsgbXNnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgaSArPSAyKVxuICAgICAgcmVzLnB1c2gocGFyc2VJbnQobXNnW2ldICsgbXNnW2kgKyAxXSwgMTYpKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICAgIHZhciBoaSA9IGMgPj4gODtcbiAgICAgIHZhciBsbyA9IGMgJiAweGZmO1xuICAgICAgaWYgKGhpKVxuICAgICAgICByZXMucHVzaChoaSwgbG8pO1xuICAgICAgZWxzZVxuICAgICAgICByZXMucHVzaChsbyk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG51dGlscy50b0FycmF5ID0gdG9BcnJheTtcblxuZnVuY3Rpb24gemVybzIod29yZCkge1xuICBpZiAod29yZC5sZW5ndGggPT09IDEpXG4gICAgcmV0dXJuICcwJyArIHdvcmQ7XG4gIGVsc2VcbiAgICByZXR1cm4gd29yZDtcbn1cbnV0aWxzLnplcm8yID0gemVybzI7XG5cbmZ1bmN0aW9uIHRvSGV4KG1zZykge1xuICB2YXIgcmVzID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgaSsrKVxuICAgIHJlcyArPSB6ZXJvMihtc2dbaV0udG9TdHJpbmcoMTYpKTtcbiAgcmV0dXJuIHJlcztcbn1cbnV0aWxzLnRvSGV4ID0gdG9IZXg7XG5cbnV0aWxzLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShhcnIsIGVuYykge1xuICBpZiAoZW5jID09PSAnaGV4JylcbiAgICByZXR1cm4gdG9IZXgoYXJyKTtcbiAgZWxzZVxuICAgIHJldHVybiBhcnI7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/minimalistic-crypto-utils/lib/utils.js\n");

/***/ })

};
;