/*! cube v0.0.0 - MIT license */
'use strict';

var cube = function (x) {
  var ans = (x * x) * x;
  return ans;
};

if(typeof module !== "undefined")
{
  module.exports = cube;
}
