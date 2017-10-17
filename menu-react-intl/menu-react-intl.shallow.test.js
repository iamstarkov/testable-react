import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import renderComponent from '../render-component';

import { Component as Menu } from './menu-react-intl';
import defaultTestProps from './default-test-props';

// prettier-ignore
const shallowComponent = renderComponent(React, shallow, Menu, defaultTestProps);

test(`wrapper`, t => {
  const w = shallowComponent();
  const actual = w.type();
  const expected = 'div';
  t.is(actual, expected, `wrapper should be 'div'`);
});

test(`items count`, t => {
  const w = shallowComponent();
  const actual = w.children().length;
  const expected = 3;
  t.is(actual, expected, `should have 3 children`);
});

test(`items' type`, t => {
  const w = shallowComponent();
  const actual = w.children().every('a');
  t.true(actual, `Every child should be 'a'`);
});

test(`item link`, t => {
  const w = shallowComponent();
  const actual = w.find('a').first().prop('href'); // prettier-ignore
  const expected = 'MENU.INDEX.LINK';
  t.is(actual, expected, 'should use relevant Link');
});

test(`item text`, t => {
  const w = shallowComponent();
  const actual = w.find(defaultTestProps.FormattedMessage).first().prop('id'); // prettier-ignore
  const expected = 'MENU.INDEX.TEXT';
  t.is(actual, expected, 'should use relevant Text');
});
