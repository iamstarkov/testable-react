import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import renderComponent from '../render-component';

import { Component as Menu } from './menu-react-router';
import defaultTestProps from './default-test-props';

// prettier-ignore
const shallowComponent = renderComponent(React, shallow, Menu, defaultTestProps);

test(`wrapper`, t => {
  const w = shallowComponent();
  const actual = w.type();
  const expected = 'div';
  t.is(actual, expected, `wrapper should be 'div'`);
});

test(`children count`, t => {
  const w = shallowComponent();
  const actual = w.children().length;
  const expected = 4;
  t.is(actual, expected, `should have 4 children`);
});

test(`children links`, t => {
  const w = shallowComponent();
  const actual = w.children().filter(defaultTestProps.Link).length;
  const expected = 3;
  t.is(actual, expected, `should have 3 Links`);
});

test(`can go back`, t => {
  const w = shallowComponent();
  const button = w.find('button');
  t.is(
    defaultTestProps.history.go(),
    null,
    `should not invoke onClick on renders`,
  );
  button.simulate('click');
  t.is(
    defaultTestProps.history.go(),
    -1,
    `should be invoked with -1 to go back in history`,
  );
});
