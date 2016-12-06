import React from 'react';
import styled from 'styled-components';
import test from 'ava';

import createMixin from './../src';

const Btn = styled.button`
  color: black;
`;

const tomatoBtnMixin = createMixin`
  color: tomato;
`;

test('should add new rule for the styled component', t => {

  t.is(Btn.rules.length, 1);
  const TomatoBtn = tomatoBtnMixin(Btn);
  t.is(TomatoBtn.rules.length, 2);
  t.not(TomatoBtn.rules[1].indexOf('color: tomato;'), -1);
});
