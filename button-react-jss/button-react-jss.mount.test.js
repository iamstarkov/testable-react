import React from 'react';
import test from 'ava';
import { mount } from 'enzyme';
import renderComponent from '../render-component';

import { Component as Button, styles } from './button-react-jss';
import defaultTestProps from './default-test-props';

const { classes } = defaultTestProps;

// prettier-ignore
const mountComponent = renderComponent(React, mount, Button, defaultTestProps);

test('Basic render', t => {
  t.true(mountComponent().is(Button), 'it should be a type `button`');

  const children = 'testChild';
  t.true(
    mountComponent({ children }).contains(children),
    'it should contain correct children',
  );
});

test('Tags', t => {
  t.true(
    mountComponent({ tag: 'a' }).children().is('a'), // prettier-ignore
    'it should be a type `a`',
  );

  t.true(
    mountComponent({ tag: 'button' }).children().is('button'), // prettier-ignore
    'it should be a `button`',
  );

  t.true(
    mountComponent({ tag: 'input' }).children().is('input'), // prettier-ignore
    'it should be a `input`',
  );
});

test('Block', t => {
  t.true(
    mountComponent({ block: true }).children().hasClass(classes.block), // prettier-ignore
    'it should have the block class',
  );
});

test('Active', t => {
  t.true(
    mountComponent({ active: true }).children().hasClass(classes.active), // prettier-ignore
    'it should have the active class',
  );
});

test('Disabled', t => {
  t.true(
    mountComponent({ disabled: true }).children().hasClass(classes.disabled), // prettier-ignore
    'it should have the disabled class',
  );

  t.true(
    mountComponent({ disabled: true }).children().is('[disabled=true]'), // prettier-ignore
    'input should be disabled',
  );
});
