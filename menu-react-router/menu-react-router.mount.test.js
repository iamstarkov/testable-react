import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';
import renderComponent from '../render-component';

import { Component as Menu } from './menu-react-router';
import defaultTestProps from './default-test-props';

// prettier-ignore
const mountComponent = renderComponent(React, mount, Menu, defaultTestProps);

test(`wrapper`, t => {
  const w = mountComponent();
  const actual = w.type();
  const expected = Menu;
  t.is(actual, expected, `wrapper should be `);
});

test(`children`, t => {
  const w = mountComponent();
  const actual = w.children().children().length;
  const expected = 4;
  t.is(actual, expected, `should have 4 children`);
});

test(`children links`, t => {
  const w = mountComponent();
  const actual = w.children().children().filter(defaultTestProps.Link).length; // prettier-ignore
  const expected = 3;
  t.is(actual, expected, `should have 3 Links`);
});

test(`can go back`, t => {
  const w = mountComponent();
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
