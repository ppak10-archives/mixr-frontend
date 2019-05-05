/**
 * Sidebar.jsx
 * Component for events sidebar
 */

// Node Modules
import React from 'react';

// Constants
import {COMPONENT} from '../constants/proptypes';

export const Sidebar = (props) => {
  return <div className="sidebar-wrapper">{props.children}</div>;
};

Sidebar.propTypes = {
  children: COMPONENT,
};
