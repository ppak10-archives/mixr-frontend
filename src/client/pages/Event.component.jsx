/**
 * Event.component.jsx
 * Evemt page component
 */

// Node Modules
import React from 'react';

// Constants
import {ACTION, REACT_ROUTER, STATUS, STRING} from '../constants/proptypes';

const EventPage = (props) => {
  // Html Elements
  const eventPageHtml = props.sessionToken ? (
    <div>Events Page</div>
  ) : (
    <div className="center-layout-wrapper">
      <h3>Please Login to View Event</h3>
    </div>
  );
  return (
    <>
      <div>{props.match.params.eventId}</div>
      {eventPageHtml}
    </>
  );
};

EventPage.propTypes = {
  ...REACT_ROUTER,
  createEventStatus: STATUS,
  resetEventStatus: ACTION,
  sessionToken: STRING,
};

export default EventPage;
