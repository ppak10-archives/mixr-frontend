/**
 * Events.component.jsx
 * Component for the events page
 */

// Node Modules
import React from 'react';

// Constants
import {STRING} from '../constants/proptypes';

const EventsPage = (props) => {
  // Html Elements
  const eventsHtml = props.sessionToken ? (
    <p>Events Cards</p>
  ) : (
    <p>Please login to view events</p>
  );

  return <>{eventsHtml}</>;
};

EventsPage.propTypes = {
  sessionToken: STRING,
};

export default EventsPage;
