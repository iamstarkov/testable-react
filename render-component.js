const renderComponent = (
  { createElement },
  method,
  Component,
  defaultProps = {},
) => (customProps = {}) => {
  const props = { ...defaultProps, ...customProps };
  const { children } = props;
  const ReactComponent = createElement(Component, props, children);
  return method(ReactComponent);
};

export default renderComponent;
