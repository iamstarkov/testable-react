import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import renderComponent from '../render-component';

import { Component as Button, styles } from './button-react-jss';
import defaultTestProps from './default-test-props';

const { classes } = defaultTestProps;

// prettier-ignore
const shallowComponent = renderComponent(React, shallow, Button, defaultTestProps);

test('Basic render', t => {
  t.true(shallowComponent().is('button'), 'it should be a type `button`');

  const children = 'testChild';
  t.true(
    shallowComponent({ children }).contains(children),
    'it should contain correct children',
  );
});

test('Tags', t => {
  t.true(shallowComponent({ tag: 'a' }).is('a'), 'it should be a type `a`');

  t.true(
    shallowComponent({ tag: 'button' }).is('button'),
    'it should be a `button`',
  );

  t.true(
    shallowComponent({ tag: 'input' }).is('input'),
    'it should be a `input`',
  );
});

test('Block', t => {
  t.true(
    shallowComponent({ block: true }).hasClass(classes.block),
    'it should have the block class',
  );
});

test('Active', t => {
  t.true(
    shallowComponent({ active: true }).hasClass(classes.active),
    'it should have the active class',
  );
});

test('Disabled', t => {
  t.true(
    shallowComponent({ disabled: true }).hasClass(classes.disabled),
    'it should have the disabled class',
  );

  t.true(
    shallowComponent({ disabled: true }).is('[disabled=true]'),
    'input should be disabled',
  );
});
