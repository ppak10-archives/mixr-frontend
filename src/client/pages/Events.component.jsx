/**
 * Events.component.jsx
 * Component for the events page
 */

// Node Modules
import React, {useEffect} from 'react';

// Constants
import {ACTION, EVENTS, STRING} from '../constants/proptypes';

const EventsPage = (props) => {
  const {getHostEvents, sessionToken} = props;
  // Effects
  useEffect(() => {
    if (sessionToken) {
      getHostEvents(sessionToken);
    }
  }, [getHostEvents, sessionToken]);

  const test = [];
  for (let i = 0; i < 100; i++) {
    test.push(i);
  }
  // Html Elements
  const eventsHtml = props.sessionToken ? (
    <div className="event-cards-wrapper card-columns">
      {props.hostEvents.map((event) => (
        <div key={event.id} className="card text-white bg-primary">
          <div className="card-header">{event.title}</div>
          <div className="card-body">
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>Please login to view events</p>
  );

  return <>{eventsHtml}</>;
};

EventsPage.propTypes = {
  getHostEvents: ACTION,
  hostEvents: EVENTS,
  sessionToken: STRING,
};

export default EventsPage;
