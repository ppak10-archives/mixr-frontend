/**
 * Sidebar.jsx
 * Component for events sidebar
 */

// Node Modules
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <h5>Show</h5>
      <ButtonGroup vertical>
        <Button>Past Events</Button>
        <Button>Occuring Events</Button>
        <Button>Upcoming Events</Button>
      </ButtonGroup>
    </div>
  );
};
