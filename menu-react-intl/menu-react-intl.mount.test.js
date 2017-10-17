import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';
import renderComponent from '../render-component';

import { Component as Menu } from './menu-react-intl';
import defaultTestProps from './default-test-props';

// prettier-ignore
const mountComponent = renderComponent(React, mount, Menu, defaultTestProps);

test(`wrapper`, t => {
  const w = mountComponent();
  const actual = w.type();
  const expected = Menu;
  t.is(actual, expected, `wrapper should be 'Menu'`);
});

test(`items count`, t => {
  const w = mountComponent();
  const actual = w.children().children().length;
  const expected = 3;
  t.is(actual, expected, `should have 3 children`);
});

test(`items' type`, t => {
  const w = mountComponent();
  const actual = w.children().children().every('a'); // prettier-ignore
  t.true(actual, `Every child should be 'a'`);
});

test(`item link`, t => {
  const w = mountComponent();
  const actual = w.find('a').first().prop('href'); // prettier-ignore
  const expected = 'MENU.INDEX.LINK';
  t.pass(actual, expected, 'should use relevant Link');
});

test(`item text`, t => {
  const w = mountComponent();
  const actual = w.find(defaultTestProps.FormattedMessage).first().prop('id'); //prettier-ignore
  const expected = 'MENU.INDEX.TEXT';
  t.pass(actual, expected, 'should use relevant Text');
});
