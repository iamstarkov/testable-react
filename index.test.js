import test from 'ava';
import React from 'react';
import Menu from './';
import { shallow } from 'enzyme';

test(`wrapper`, t => {
  const w = shallow(<Menu />);
  const actual = w.type();
  const expected = 'div';
  t.is(actual, expected, `wrapper should be `);
});

test(`children`, t => {
  const w = shallow(<Menu />);
  const actual = w.children().length;
  const expected = 3;
  t.is(actual, expected, `should have 3 children`);
});

test(`children type`, t => {
  const w = shallow(<Menu />);
  const actual = w.children().every('Link');
  t.true(actual, `Every child should be 'Link'`);
});
