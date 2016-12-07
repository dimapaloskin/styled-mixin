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

const testPropertyMixin = createMixin`
  color: ${props => props.isTomato ? 'tomato' : 'black' };
`;

test('should add new rule for the styled component', t => {

  t.is(Btn.rules.length, 1);
  const TomatoBtn = tomatoBtnMixin(Btn);
  t.is(TomatoBtn.rules.length, 2);
  t.not(TomatoBtn.rules[1].indexOf('color: tomato;'), -1);
});

test('should add new property rule for the styled component', t => {

  t.is(Btn.rules.length, 1);
  const TomatoBtn = testPropertyMixin(Btn);
  t.is(TomatoBtn.rules.length, 4);
  const isTomatoFn = TomatoBtn.rules[2];
  t.is(isTomatoFn({ isTomato: true }), 'tomato');
  t.is(isTomatoFn({ isTomato: false }), 'black');
  t.is(isTomatoFn({}), 'black');
});
