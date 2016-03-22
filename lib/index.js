'use strict';

var _normat = require('normat');

var _normat2 = _interopRequireDefault(_normat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  var start = process.hrtime();

  return function () {
    var format = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    var time = process.hrtime(start);
    time = parseInt(time[0] * 1000 + time[1] / 1e6);

    return format ? _normat2.default.ms(time) : time;
  };
};