/**
 * Added a NavItem util which takes in a link and a title for each navigation page
 * Added Proptypes to ensure type safety
 */

import React from 'react'
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

const NavItem = ({ label, path }) => (
  <li className={"hover:ease-in-out px-2 rounded-sm hover:bg-blue-500 sm:text-white"}>
    <Link to={path}>{label}</Link>
  </li>
);
//Added PropTypes to ensure type safety during runtime
NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default NavItem