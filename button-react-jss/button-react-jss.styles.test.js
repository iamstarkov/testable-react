import React from 'react';
import test from 'ava';

import { styles } from './button-react-jss';

test('render button.backgroundColor with props.bg', t => {
  const props = {
    bg: 'red',
  };
  const actual = styles.button.backgroundColor(props);
  const expected = props.bg;

  t.is(actual, expected);
});
