import styled from 'styled-components';

function createMixin() {
  const mix = Array.from(arguments);

  return function(Component) {
    return styled(Component)(...mix);
  }
};

export default createMixin;
