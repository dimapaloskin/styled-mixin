"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function wrap(styled) {
  function createMixin() {
    var mix = Array.from(arguments);

    return function (Component) {
      return styled(Component).apply(undefined, _toConsumableArray(mix));
    };
  };

  return createMixin;
};