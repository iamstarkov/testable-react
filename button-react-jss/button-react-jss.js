import React from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';
import styles from './button-react-jss.styles';

const Button = ({ classes, children, tag: Tag, block, active, disabled }) => {
  const isInput = Tag === 'input';
  const isLink = Tag === 'a';
  return (
    <Tag
      className={cn({
        [classes.button]: true,
        [classes.block]: block,
        [classes.active]: active,
        [classes.disabled]: disabled,
      })}
      disabled={disabled ? true : null}
      aria-pressed={isLink && active ? true : null}
      aria-disabled={isLink && disabled ? true : null}
    >
      {!isInput ? children : null}
    </Tag>
  );
};

Button.defaultProps = {
  tag: 'button',
  block: false,
  active: false,
  disabled: false,
  onClick: () => {},
};

export { Button as Component, styles };
export default injectSheet(styles)(Button);
