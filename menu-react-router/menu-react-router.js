import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const Menu = ({ Link, history }) => (
  <div>
    <Link to={'/'}>Main</Link>
    <Link to={'/dashboard'}>Dashboard</Link>
    <Link to={'/faq'}>FAQ</Link>
    <button
      onClick={() => {
        history.go(-1);
      }}
    >
      Go Back
    </button>
  </div>
);

Menu.defaultProps = {
  Link,
};

export { Menu as Component };
export default withRouter(Menu);
