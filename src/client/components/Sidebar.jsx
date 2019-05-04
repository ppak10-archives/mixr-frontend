/**
 * Sidebar.jsx
 * Component for events sidebar
 */

// Node Modules
import React from 'react';

// Components
import {EventTogglebar} from './EventTogglebar.container';

export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <EventTogglebar />
    </div>
  );
};
