'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function createMixin() {
  var mix = Array.from(arguments);

  return function (Component) {
    return (0, _styledComponents2.default)(Component).apply(undefined, _toConsumableArray(mix));
  };
};

exports.default = createMixin;
module.exports = exports['default'];
