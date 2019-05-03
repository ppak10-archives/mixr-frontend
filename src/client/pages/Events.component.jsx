/**
 * Events.component.jsx
 * Component for the events page
 */

// Node Modules
import React, {useEffect} from 'react';

// Components
import {EventCard} from '../components/EventCard';

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
    <div className="event-cards-wrapper">
      {props.hostEvents.map((event) => (
        <EventCard event={event} key={event.id} />
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
