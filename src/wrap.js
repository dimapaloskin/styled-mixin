module.exports = function wrap(styled) {
  function createMixin() {
    const mix = Array.from(arguments);

    return function(Component) {
      return styled(Component)(...mix);
    }
  };

  return createMixin;
}
