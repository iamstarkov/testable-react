import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <Link to={'/'}>Main</Link>
    <Link to={'/dashboard'}>Dashboard</Link>
    <Link to={'/faq'}>FAQ</Link>
  </div>
);

export default Menu;
